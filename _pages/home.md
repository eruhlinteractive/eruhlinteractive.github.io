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
<h3 class="notice--warning"><b>Notice</b>: This website is currently under heavy development and will change frequently. Check back later for more cool stuff! :grin:</h3>
<br>
# Hey there, I'm Ethan!

<div style="display:flex" id="header-intro">
    <div id="column-left" style="flex-basis: 50%; flex-grow:5;">
I'm a passionate programmer and game developer with multiple years of experience in C# and C++. I have worked in Unity3D and Godot for many years in addition to other engines and toolsets.
<br><br>
I love learning new skills and growing as a developer. Although coding is where I am most comfortable, I also have experience working with animations, asset production, and audio design.

    </div>
    <div id="column-right">
        <img src="/assets/images/portrait.webp" style="clip-path:circle(50% at 144px 144px);" alt="E Ruhl Interactive on a park bike">
    </div>
</div>
<br>
## Featured Projects

<div id="mini-projects" style="">

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

{% include mini-project.html
    title="Animal Crossing Creature Tracker"
    description="A web tool for tracking creature appearances in the game Animal Crossing:New Horizons utilizing Firebase and the ACNH API"
    img="/assets/images/project-thumbnails/actracker-thumb.webp"
    alt="A screenshot of the game Chicken Chaser"
    link="https://people.rit.edu/epr4296/330/project2/app.html"
%}

</div>
