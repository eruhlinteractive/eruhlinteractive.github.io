---
title: Moving My Website to Github Pages
author: Ethan Ruhl
layout: single
---

Welcome to the first post on my \*new\* website! Although I've had the domain <eruhl-interactive.com> for a few years now, I recently made the switch to hosting on Github Pages! Today I'll cover the why, how, and some of the challenges (and excitement) of making this transition. 

<br>

# Hello World!

One of the big things my professors talked about in my college courses was the importance of having a *portfolio website*. I was even required to take some courses on interactive web application development, most of which required us to post something publicly on our school-provided web domains. The free hosting was awe
<br>
# Getting Set Up

Around this time there was another hobby that really started to catch my attention: building and managing a [home lab](https://linuxhandbook.com/homelab/). I had always had an interest in IT and networked computing, but never really had the hardware or need to build one myself, especially with my limited budget. The idea of setting up my own server and running a website sounded like a fun experiment, not to mention the fact that it would significantly reduce costs. With my limited college budget, spending $100+ USD a year on third-party hosting was really going to be a challenge.

<br>

# A Slice of PI

Right when it seemed like all hope was lost, I came across an interesting article about someone running a home automation server on a Raspberry Pi. This peaked my interest since it seemingly filled all my requirements: 
- Inexpensive Hardware :ballot_box_with_check: 
- Low power and space consumption :ballot_box_with_check:
- Quiet while running :ballot_box_with_check:

However, these benefits also came with some tradeoffs. Namely the lack of processing power and slower ethernet interfaces. I decided to go with a [Raspberry Pi Zero](https://www.raspberrypi.com/products/raspberry-pi-zero/) since it was relatively cheap (~10$ USD) and still had the processing power to run an Apache web server. Although I could have gone with something more powerful like a PI-4B, with the traffic levels I expected and running only static webpages, I figured the PI-Zero would be a good starting point that I could expand on later.

<br>

# The End of Self Hosting

After getting the server set up, the PI did a great job hosting my server. Load times were a bit slow, but by utilizing Cloudflares DNS proxy and caching services I was able to speed up load times. Everything was working great it seemed... 

**But then I moved**

After finishing college, I moved to a new place and wanted to set my server back up before building some new features into my website. That was however, until I read that hosting public services was against the terms of service for my internet provider. This was quite a bummer since I had started to enjoy running my own services, but it ultimately meant that I needed to find another way to host my website. :disappointed:

# Moving to Github

A while back, I had heard that 