---
layout: page
title: About me
keywords: "arne gockeln, software development, c++"
description: "a few words about Arne Gockeln"
---
{% capture portrait %}
<div class="wp-caption alignright">
    <img src="{{ site.url }}/assets/images/arne_gockeln_portrait.jpg" alt="Portrait Arne Gockeln"/>
    <p class="wp-caption-text">Arne Gockeln</p>
</div>
{% endcapture %}
{{ portrait }}

I am a passionate software developer and financial trader based in Hamburg, Germany. 

Since 2000 I have been involved in applied software development, web development, game development, bash scripting, linux system administration and startup founding. 

In the last 18 years I was working as a founder and ceo of a software company and as a freelancer and solo-entrepreneur in web- and software development.

Since 2011 I invest a lot of time to work on topics around technical analysis and algorithmic trading in the financial markets, mainly in forex. 

## Favorite Tools

I love the open source world and everything related. Mainly I work on macOS and debian linux on a daily basis. My favorite programming languages are C/C++ and PHP. I like to use the Qt Framework to build gui applications, but I am also a fan of ncurses.

I like to keep things simple. To write code I use Sublime Text with plugins for PHP and C++ auto-completition, syntax highlighting and cmake as build system. On [github](https://github.com/arnegockeln){:target="_blank"} you can find my public projects. 

For blogging and websites I use the static site processor jekyll. 

To be quick and to automate a lot of things I am heavily into bash scripting. I would say I am a terminal power user.

## Why another blog?

I love what I do and I want to work with and talk to other like mindet adventureres. Also I want to share my practical knowledge and experience. I want to publish articles and content about everything that is in my interest. At least these are software  development and financial trading topics.

## Standing Invitation

As I am always interested in meeting new people all over the world, this is a standing invitation: if you want to talk about startups, software development or trading, I want to talk to you.

Feel free to contact me here: 
{% for s in site.data.social %}[{{ s.css }}]({{ s.url }}){:target="_blank"}{% if forloop.last == false %}, {% endif %}{% endfor %}! Especially if you are in Hamburg, I would also love to meet you in person! The first cup of tea (or coffee) goes on me!

Arne