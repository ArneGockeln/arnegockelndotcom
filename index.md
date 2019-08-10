---
layout: page
title: I turn tea and algorithms into highly efficient custom software solutions.
---
{% capture portrait %}
<div class="wp-caption alignright">
    <img src="{{ site.url }}/assets/images/arne_gockeln_portrait.jpg" width="329" alt="Portrait Arne Gockeln"/>
    <p class="wp-caption-text">Arne Gockeln</p>
</div>
{% endcapture %}
{% capture socials %}
{% for s in site.data.social %}<a href="{{ s.url }}" target="_blank">{{ s.css }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}
{% endcapture %}

## Hi
{{ portrait }}
my name is **Arne Gockeln** and since the year 2000 I have been involved in **custom software and web development**, founding business ideas and working as a freelancer. 

## What can I do for you?

I can help you transforming your business or project idea into beautiful **macOS desktop- or iOS mobile applications** using the **Qt Framework**. Also I can build high performance low maintenance **web applications** which are working cross-platform in any web browser.

If you need to I can connect **third party APIs** to your existing application. A common use case would be to connect to a **JSON API** and read or post some data.

If you are a startup and need help finishing your **minimum viable product (MVP)**, please let me know!

Also I can help you with **project management tasks** and by **leading your team** of developers and designers to successfully build your digital product. 

If you are interested in working with me, please shoot me a message on {{ socials }} or by good old email: sayhi@gockeln.com.

## Freelance Work

As a freelancer I worked from small to large projects as a one man solution and as a team member. In most of the projects my main task was the implementation of custom software, connecting APIs or developing custom WordPress Plugins. Also I build a lot of Websites using WordPress and the Jekyll static site processor. The best description of my job is **Backend Software Development**. 

Some of my clients were

- KADDI-LACK Die Dortmunder Lackmanufaktur
- Ruhr24 GmbH & Co. KG
- Wiethe Group GmbH
- RTL Interactive GmbH
- Vodafone GmbH
- Bundesfachschule für Orthopädietechnik e.V.
- Forscherstation, Klaus-Tschira-Kompetenzzentrum für frühe naturwissenschaftliche Bildung gGmbH
- Standpunkt Kommunikation GmbH
- ...

## Technical Skills

I love the open source world and everything related to it. Mainly I work with **macOS and Linux**. My preferred **programming languages** are **C/C++, Python, PHP and Bash**. I like to use the **Qt framework** to develop desktop and mobile applications, but I'm also a fan of **ncurses, bash scripting and command line programs**. 

{% include figure.html image="/uploads/072019/techstacklogos.png" w="1280" h="400" alt="TechStack Logos c++,qt,php,wordpress,debian,macos" %}

## What are algorithms? 

You can think of an algorithm as a recipe that describes the exact steps needed to solve a problem or reach a goal. A programming algorithm describes how to do something and the computer will do it exactly that way every time. But first you have to convert the algorithm into a language the computer will understand, like the programming languages C++ or Python.

In the design process we can write an algorithm as a list of steps using text or as a picture with shapes and arrows called a flowchart.

An algorithm is not the computer code. Algorithms are just the instructions which gives a clear idea how to write the computer code.

### Example
This is an example to write an algorithm which finds the fibonacci series till terms <= 10

```conf
Step 1: Start
Step 2: Declare variables terms, arr
Step 3: Initialize variables terms = 10, a = 0, b = 1, fib = 0
Step 4: Repeat the steps until i <= terms
  Step 4.1 Display a
  Step 4.2 Assign fib <- a + b
  Step 4.3 Assign a <- b
  Step 4.4 Assign b <- fib
Step 5: Stop
```

The code for this algorithm would look like this in 5 programming languages:

{% capture cpp %}
{% highlight cpp %}
// Fibonacci Sequence in C++
#include <iostream>
int main(int argc, char const *argv[]) {
    int terms = 10;
    int a = 0, b = 1, fib = 0;
    for(int i = 0; i <= terms; i++) {
        std::cout << a << std::endl;
        fib = a + b;
        a = b;
        b = fib;
    }
    return 0;
}
{% endhighlight %}
{% endcapture %}

{% capture php %}
{% highlight php %}
<?php 
// Fibonacci Sequence in PHP
$terms = 10;
$a = 0;
$b = 1;
for($i = 0; $i <= $terms; $i++) {
    echo "$a \n";
    $fib = $a + $b;
    $a = $b;
    $b = $fib;
}
{% endhighlight %}
{% endcapture %}

{% capture bash %}
{% highlight bash %}
#!/bin/bash
# Fibonacci Sequence in Bash
TERMS=10
A=0
B=1
for((i=0; i<=TERMS; i++))
do
    echo "$A "
    FIB=$((A + B))
    A=$B
    B=$FIB
done
{% endhighlight %}
{% endcapture %}

{% capture swift %}
{% highlight swift %}
// Fibonacci Sequence in Swift
let terms = 10
var A = 0
var B = 1
for _ in 0...terms {
    print(String(A))
    let fib = A + B
    A = B
    B = fib
}
{% endhighlight %}
{% endcapture %}

{% capture javascript %}
{% highlight javascript %}
// Fibonacci Sequence in JavaScript
var terms = 10, a = 0, b = 1, fib = 0;
for(var i = 0; i <= terms; i++) {
    console.log(a);
    fib = a + b;
    a = b;
    b = fib;
}
{% endhighlight %}
{% endcapture %}

{% capture python %}
{% highlight python %}
// Fibonacci Sequence in Python
def fib(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
        print(a)
{% endhighlight %}
{% endcapture %}

{% capture tabs %}
<div class="tabs">
  <ul class="tab-titles">
      <li><a class="active">C++</a></li>
      <li><a>Python</a></li>
      <li><a>PHP</a></li>
      <li><a>Swift</a></li>
      <li><a>JavaScript</a></li>
      <li><a>Bash</a></li>
  </ul>
  <div class="tab-content">
      <div>
        {{ cpp }}
      </div>
      <div>
        {{ python }}
      </div>
      <div>
        {{ php }}
      </div>
      <div>
        {{ swift }}
      </div>
      <div>
        {{ javascript }}
      </div>
      <div>
        {{ bash }}
      </div>
  </div>
</div>
{% endcapture %}

{{ tabs }}

## What is tea?

Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis (scientific name), an evergreen bush native to East Asia. After water, it is the most widely consumed drink in the world. (wikipedia)

{% include figure.html image="/uploads/042019/massimo-rinaldi-1306655-unsplash-small.jpg" w="1600" h="1200" caption="fresh green tea with mint" alt="fresh green tea with min picture" %}

An often surprising fact to tea novices is that all teas (Black, green, Oolong, White and Pu'erh) come from the same plant. The tea plant grows best in loose, deep soil, at high altitudes, and in sub-tropical climates. So, in short, "tea" is anything derived from the Camellia sinensis plant.

I drink green and black tea every day. Especially when I am using a code editor or when I have to create efficient algorithms.

## Open Source / Projects

In my spare time I work on open source and personal software projects. Also I am heavily interested in algorithmic trading and building full automatic trading software.

Here is a little list of some software projects I am working on:

{% capture projectlist %}
{% for s in site.data.projects %}
{% assign mod = forloop.index | modulo: 2 %}
{% if mod == 1 %}<div class="row">{% endif %}
  <div class="col-sm-12 col-md-6"><h3>{{ s.name }} <a href="{{ s.url }}" target="_blank">github</a></h3> <p>{{ s.desc }}</p>
  </div>
{% if mod == 0 %}</div>{% endif %}
{% endfor %}
<!--/div-->
{% endcapture %}

{{ projectlist }}

In 2019 I decided to share my knowledge and meet with other great algorithmic trading adventurers. So I founded the [Algorithmic/Quantitative Trading Hamburg](https://www.meetup.com/de-DE/Algorithmic-Quantitative-Trading-Hamburg){:target="_blank"} Meetup. I would be happy to see you there!

## Standing Invitation

In 2018 I moved to **Hamburg &#9875;** and every day I look forward to new discoveries and contacts. I am always interested in meeting new people and exchanging ideas. So here's my suggestion: if you feel like talking to me about business and software development, then I invite you to get in touch with me.

Especially if you are in Hamburg! Then I would also like to meet you personally. The first cup of tea or coffee is on me!

You can shoot me a message on {{ socials }} or by good old email: sayhi@gockeln.com.

Arne<br/>
*Algorithmic Adventurer*