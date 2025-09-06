---
title: Home
layout: splash
description: Learn all about Sleepy Rock Games and what he's been up to!
slug: home
permalink: /home
show-stars: true
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
    { margin-top: 10%;}
    #button-separator
    {
        display: inline;
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
    #quick-links
    {
        text-align:center;
    }
    #button-separator
    {
        display: block;
    }
 }
 /*
 @media screen and (max-width: 600px)
 {
    #mini-projects
    {
        flex-direction: column;
    }
 }
 */
</style>

<br>
<div style="display:flex" class="gradient-card-outer">
    <div class="gradient-card-inner" id="header-intro" style="display:flex">
        <div id="column-left" style="flex-basis: 50%; flex-grow:5;">
            <h1>Hey there, I'm <strong>Sleepy Rock Games</strong>!👋</h1>
            {% include typed-text.html
                data="\"Game Developer\", \"Software Engineer\", \"Artist\""
            %}
            <br>
            As a software engineer and game developer, I strive to create engaging and innovative interactive experiences for everyone to enjoy. <br><br>I love to experiment with Linux-based tools and other intriguing technologies, and plan to share the shennanigans I get into on this website! 😁
            <br>
            <br>
            <br>
            <div id="quick-links">
                {% include buttons/toon-button.html link="/portfolio" label="About Me" class="primary" %}
                <div id="button-separator" style="padding:5px 5px"></div>
                {% include buttons/toon-button.html link="/projects" label="My Projects" class="accent" %}
            </div>
        </div>
        <div id="column-right">
           <!--  <img src="/assets/images/portrait.png" id="portrait" style="width:400px;" alt="Sleepy Rock's Avatar">-->
           {% include cards/3D-hover-card.html %}
        </div>
    </div>
</div>
<br>
## Featured Projects

<div id="mini-projects" style="padding-bottom:20px">

    {% include mini-project.html
        title="S.L.I.M.E"
        description="An online multiplayer FPS created in 10 days"
        img="/assets/images/project-thumbnails/slime-thumb.png"
        alt="The main slime character"
        link="/projects#project-display-slime"
    %}

    {% include mini-project.html
        title="Wander Vyrosa"
        description="A commercial remake and release of the game jam game titled \"Untitled Space Game\""
        img="/assets/images/project-thumbnails/vyrosa-thumb.webp"
        alt="A planet from the game Wander Vyrosa"
        link="/projects#project-display-wander-vyrosa"
    %}

    {% include mini-project.html
        title="Grill Daddy" description="A physics based grill-em-up made for the 2022 ROC Game Dev Summer game jam"
        img="/assets/images/project-thumbnails/gd_thumb.webp"
        alt="The grill from the game Grill Daddy"
        link="/projects#project-display-grill-daddy"
    %}

</div>
<br>
## Latest Blog Posts
{% include blog/latest-posts.html %}
<br>
