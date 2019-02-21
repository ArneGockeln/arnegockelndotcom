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

I was born 1982 in Herdecke, Germany and grew up in Dortmund. At the age of 7-8 I started my journey as a software developer by changing code fragments in the computer games I was playing. This is where everything starts. So I started to learn basic on DOS 6.22 and right after that C on linux. Between 10 to 18 I developed computer games, software tools and got into the world wide web.  

With the age of 18, around 2000/2001, I founded my first software company and since then I have been involved in applied software development, web development, game development, bash scripting and linux system administration.

In 2018 I moved to Hamburg, Germany.

## Favorite Tools

I love the open source world and everything related. Mainly I work on macOS and debian linux on a daily basis. My favorite programming languages are C/C++ and PHP. I like to use the Qt Framework to build gui applications, but I am also a fan of ncurses.

I like to keep things simple. To write code I use Sublime Text with plugins for PHP and C++ auto-completition, syntax highlighting and cmake as build system. On [github]({{ site.data.social.github.url }}){:target="_blank"} you can find my public projects. 

For blogging and websites I use the static site processor jekyll. 

To be quick and automate a lot of things I am heavily into bash scripting and be a terminal power user.


## Why another blog?

I love what I do and I want to work with and talk to other like mindet adventureres. Also I want to share my practical knowledge and experience. I want to publish articles and content about everything that is in my interest. At least these are software  development and financial trading topics.

Also I am always interested in meeting new people all over the world and discuss interesting topics. Feel free to contact me here: 
{% for s in site.data.social %}[{{ s.css }}]({{ s.url }}){:target="_blank"}{% if forloop.last == false %}, {% endif %}{% endfor %}! Especially if you are in Hamburg, let's go for a cup of tea.

Arne