---
title: Home
layout: splash
description: Learn all about ERuhl Interactive and what he's been up to! 
slug: home
permalink: /home
---

<style>
    #column-right
    {
       text-align:center; 
       margin-left:40px;
    }
    #mini-projects
    {
        display: flex; 
        align-content: space-around;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    #portrait
    { margin-top: 25%;}

 @media screen and (max-width: 900px) 
 {
    #header-intro
    {
        flex-direction: column;
    }
    #column-right
    {
        margin-left:0px;
        margin-top:50px;
    }
 }
 @media screen and (max-width: 600px)
 {

    #mini-projects
    {
        flex-direction: column;
    }
 }
</style>
<br>

<div style="display:flex" id="header-intro">
    <div id="column-left" style="flex-basis: 50%; flex-grow:5;">
<h1>Hey there, I'm Ethan!</h1>
{% include typed-text.html
    data="\"Game Developer\", \"Software Engineer\", \"Artist\""
%}
<br>
<br>
As a software engineer and game developer, the computer is my artistic canvas. With a focus on systems and engine development, I strive to create engaging and innovative interactive experiences for everyone to enjoy.
<br>
<br>
{% include button.html link="/portfolio" text="About Me" %}
</div>
<div id="column-right">
    {% include interactive-guy.html %}
    <img src="/assets/images/portrait.png" id="portrait" style="width:300px;  clip-path:circle(50% at 150px 150px);" alt="E-Ruhl Interactive's Avatar">
</div>

</div>
<br>

## Featured Projects

<div id="mini-projects" style="">

{% include mini-project.html
    title="S.L.I.M.E"
    description="An online multiplayer FPS created in 10 days"
    img="/assets/images/project-thumbnails/slime-thumb.png"
    alt="The main slime character"
    link="https://pumpkinhousegames.itch.io/slime"
%}

{% include mini-project.html
    title="Wander Vyrosa"
    description="A commercial remake and release of the game jam game titled \"Untitled Space Game\""
    img="/assets/images/project-thumbnails/vyrosa-thumb.webp"
    alt="A planet from the game Wander Vyrosa"
    link="https://wandervyrosa.com"
%}

{% include mini-project.html
    title="Grill Daddy" description="A physics based grill-em-up made for the 2022 ROC Game Dev Summer game jam"
    img="/assets/images/project-thumbnails/gd_thumb.webp"
    alt="The grill from the game Grill Daddy"
    link="https://daniel7972.itch.io/grill-daddy"
%}

{% include mini-project.html
    title="Chicken Chaser"
    description="A game made from scratch using C++, DirectX11, and the React3D physics engine"
    img="/assets/images/project-thumbnails/chickenchaser-thumb.webp"
    alt="A screenshot of the game Chicken Chaser"
    link="https://youtu.be/eAfopfmwcZw"
%}
</div>
