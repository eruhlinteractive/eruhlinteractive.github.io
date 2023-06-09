"use strict"
import "./components/project-display-mini.js"
import "./components/nav-component.js"
import { Vector2,floatClamp,floatLerp } from "./helpers.js";

let canvas,ctx;

let timeoutObject;

let points = [];

var mousePos;

var centerPoint;

var image;

var pointAmount = 25;
let canvasSize = 400;
let radius = 140.0;
let turtle;

function init()
{
   //document.querySelector("#close-dev-message").onclick = closeDevMessage;

   // Portrait setup
   canvas = document.querySelector("#portrait-interactive");
   ctx = canvas.getContext("2d");
   canvas.onmousemove = updateMousePosition;
   mousePos = new Vector2(canvasSize/2.0,canvasSize/2.0);
   centerPoint = new Point();

   centerPoint.position = new Vector2(canvasSize/2.0,canvasSize/2.0);
   centerPoint.targetPoint = new Vector2(canvasSize/2.0,canvasSize/2.0);
   

   image = document.querySelector("#portrait-img");
   turtle = document.querySelector("#turtle-surprise");

   // Static turtle animation
   image.onclick = playTurtleAnim;
   //document.querySelector("#portrait-img").style.display = "none";

   for(let i =0;i<pointAmount;i++)
   {
      points.push(new Point(0,0));
   }

   document.querySelector("#desktop-portrait-loader").classList.add("is-hidden");
   update();
}

function playTurtleAnim()
{ 
   let newTurtle = turtle.cloneNode(true);
   turtle.parentNode.replaceChild(newTurtle,turtle);
   turtle = newTurtle;
   turtle.classList.remove("is-hidden")

}

function closeDevMessage()
{
   document.querySelector("#in-dev-message").style.display = 'none';
}

function calculateRadialPoints(center,amount,radius)
{

   var radialPoints = [];
   var offset = (2.0 * Math.PI) / amount;
   for(let i = 0; i < amount;i++)
   {
      radialPoints.push(new Vector2(center.x + Math.cos(i * offset) * radius,center.y + Math.sin(i * offset) * radius))
   }
   return radialPoints;

}

function updateMousePosition(e)
{
   let rect = e.target.getBoundingClientRect();
   mousePos = new Vector2(e.clientX - rect.x,e.clientY - rect.y);
}

function update()
{
    
   ctx.clearRect(-25, -25, canvasSize + 50, canvasSize + 50);

   let canvasRect = canvas.getBoundingClientRect();
   
   if( mousePos.x >= canvasSize || mousePos.x <= 25 || mousePos.y >= canvasSize + 5 || mousePos.y <= 25)
   {
      mousePos = new Vector2(200,200);
   }

   let radialPoints = calculateRadialPoints(mousePos,pointAmount,radius);

   // Draw fill
   centerPoint.targetPoint = mousePos;
   centerPoint.update();
   
   for(let i = 0; i < pointAmount;i++)
   {
      points[i].setTargetPoint(radialPoints[i]);
      points[i].center = centerPoint.position;
      points[i].update();
   }

   ctx.save();
   ctx.beginPath()
   ctx.moveTo(points[0].position.x,points[0].position.y);

   for(var i = 1;i < pointAmount;i++)
   {
      ctx.lineTo(points[i].position.x,points[i].position.y);
   }

   ctx.lineTo(points[0].position.x,points[0].position.y);
   ctx.strokeStyle = 'black';
   ctx.closePath();
   
   // Clip image with the border
   ctx.clip();
   ctx.drawImage(image,centerPoint.position.x-162,centerPoint.position.y-162,325,325);
   ctx.clip();
   ctx.beginPath();
   ctx.rect(5,5,canvasSize-10,canvasSize-10);
   ctx.strokeStyle = 'white';
   ctx.lineWidth = '5';
   ctx.stroke();
   ctx.restore();
 
   
   // Shhhhhh (._.)/\(._.)
   ctx.save();
   
   ctx.beginPath();
   ctx.rect(centerPoint.position.x - 25,centerPoint.position.y,50,40);
   ctx.globalAlpha = 0.0;
   ctx.stroke();

   ctx.clip();
   ctx.globalAlpha = 1.0;
   ctx.drawImage(turtle,canvasSize/2.0,canvasSize-5,25,25);
   ctx.restore();

   timeoutObject = setTimeout(update,1.0/30.0)
}

class Point{
   constructor(x=0.0,y=0.0)
   {
       this.position = new Vector2(x,y);
       this.velocity = new Vector2(0,0);
       this.velocityModifier = Math.random() * 0.0009 -  0.00045
       this.targetPoint = new Vector2(0,0);
       this.center = new Vector2(0,0);
   }


   update()
   {
       let delta = 1.0/30.0;
       if(this.position != null && this.targetPoint != null)
       {

         let distToCursor = Vector2.subtract(mousePos,this.position).magnitude()
         if(distToCursor > radius)
         {
           distToCursor = radius -15.0;
         }
         
         var slide = floatLerp(-10.0,1.0,distToCursor);
         let offsetVec = Vector2.subtract(this.position,this.targetPoint).normalized();
         //console.log(distToCursor);
         this.position = Vector2.lerp(this.position,Vector2.add(this.targetPoint,offsetVec),delta * 0.00025 * slide + this.velocityModifier);
         
         this.position.x = this.position.x > 395? 395: this.position.x < 5 ? 5: this.position.x;
         this.position.y = this.position.y > 395? 395: this.position.y < 5 ? 5: this.position.y;
         //this.drawPoint();
       }
       
   }

   setTargetPoint(newPoint)
   {
       this.targetPoint = newPoint;
   }

   drawPoint()
   {
      drawCircle(this.position.x,this.position.y,5.0);
   }
}

window.onload = () => init();