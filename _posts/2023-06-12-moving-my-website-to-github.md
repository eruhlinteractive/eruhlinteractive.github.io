---
title: Moving My Website to Github Pages
author: Ethan Ruhl
tags: technology programming web_development
excerpt: "My journey from self hosting my website to hosting on Github pages."
slug: /moving-my-website-to-github
header:
  image: assets/images/posts/github_apache_banner.webp
  #overlay_color: "#1f242c"

author_profile: true

toc: true
---


Welcome to the first post on my \*new\* website! Although I've had the domain <eruhl-interactive.com> for a few years now, I recently made the switch to hosting on Github Pages! Today I'll cover the why, how, and some of the challenges (and excitement) of making this transition. 

# Hello World!

One of the big things my professors talked about in my college courses was the importance of having a *portfolio website*. I was even required to take some courses on interactive web application development, most of which required us to post something publicly on our school-provided web domains. The free hosting was awesome for learning the basics of web development, but if I was going to take the time to build a website I wanted to have full control over the server as well.

# Getting Set Up

Around this time there was another hobby that really started to catch my attention: building and managing a [home lab](https://linuxhandbook.com/homelab/). I had always had an interest in IT and networked computing, but never really had the hardware or need to build one myself, especially with my limited budget. The idea of setting up my own server and running a website sounded like a fun experiment, not to mention the fact that it would significantly reduce costs. With my limited college budget, spending $100+ USD a year on third-party hosting was really going to be a challenge.

# A Slice of PI

Right when it seemed like all hope was lost, I came across an interesting article about someone running a home automation server on a Raspberry Pi. This peaked my interest since it seemingly filled all my requirements: 
- Inexpensive Hardware :ballot_box_with_check: 
- Low power and space consumption :ballot_box_with_check:
- Quiet while running :ballot_box_with_check:

However, these benefits also came with some tradeoffs. Namely the lack of processing power and slower ethernet interfaces. I decided to go with a [Raspberry Pi Zero](https://www.raspberrypi.com/products/raspberry-pi-zero/) since it was relatively cheap (~10$ USD) and still had the processing power to run an Apache web server. Although I could have gone with something more powerful like a PI-4B, with the traffic levels I expected and running only static webpages, I figured the PI-Zero would be a good starting point that I could expand on later.


# The End of Self Hosting

After getting the server set up, the PI did a great job hosting my server. Load times were a bit slow, but by utilizing Cloudflares DNS proxy and caching services I was able to speed up load times. Everything was working great it seemed... 

**But then I moved**

After finishing college, I moved to a new place and wanted to set my server back up before building some new features into my website. That was however, until I read that hosting public services was against the terms of service for my internet provider. This was quite a bummer since I had started to enjoy running my own services, but it ultimately meant that I needed to find another way to host my website. :disappointed:

# Moving to Github

A while back, I had heard that Github had a new system that allowed users to build and host websites directly from the repositories *for free*. I honestly thought it was too good to be true, since a lot of services charged a lot of money for website hosting, let alone getting a domain. Looking into it more though, it seemed like the best way to get my website online. Although I no longer had full control over the server, I had a better idea of what I wanted for my site and it seemed to fit with the features Github was offering.

# Learning Jekyll and Liquid

One thing that I was nervous about was the build system that Github uses. I had heard of HTML/CSS pre-processors and Ruby on Rails before, but still didn't know how long it would take to learn a new one. Previously I wrote my website using vanilla HTML/CSS/JS, occasionally using external libraries like [Bulma](https://bulma.io). As a result, learning the new 'tech stack' seemed like a big task that I wasn't sure I wanted to take on.

To my surprise, it was extremely easy to learn the basics of. I love the modular nature of includes and layouts in Jekyll, and it definitely saved a lot of time when re-building this website. Messing around with CSS was something I dreaded when building my website before (I never really got the hang of the 'cascading' part of CSS). With the help of awesome community themes for Jekyll like [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) though, I was able to get a nice looking website back up in the matter of a weekend.

It wasn't all rainbows and unicorns though. Getting the initial Ruby environment set up and expanding beyond the scope of the [Jekyll 101](https://jekyllrb.com/docs/step-by-step/01-setup/) tutorials was quite a challenge. Even now I am still learning as I go along, poking and prodding whenever I want to change something.

# Development Continues!

Despite these challenges, for the first time I am actually excited to continue working on my website and developing different 'web toys' for everyone to play with! Check back periodically to see what's new! Until then, happy browsing!