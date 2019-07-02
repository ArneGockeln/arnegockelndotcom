---
layout: page
title: I turn tea and algorithms into something
---
{% capture portrait %}
<div class="wp-caption alignright">
    <img src="{{ site.url }}/assets/images/arne_gockeln_portrait.jpg" alt="Portrait Arne Gockeln"/>
    <p class="wp-caption-text">Arne Gockeln</p>
</div>
{% endcapture %}

## Hi
{{ portrait }}
my name is **Arne Gockeln** and I have made my great passion, **software development**, my profession. 

Since the year 2000 I have been involved in web- and custom software development, founding business ideas and working as a freelancer.

I love the open source world and everything related to it. Mainly I work with macOS and debian Linux. My preferred programming languages are C/C++, Swift, PHP and Bash. I like to use the Qt framework or AppKit to develop GUI applications, but I'm also a fan of ncurses, bash scripting and command line programs. 

## What are algorithms?

You can think of an algorithm as a recipe that describes the exact steps needed to solve a problem or reach a goal. A programming algorithm describes how to do something and the computer will do it exactly that way every time. But first you have to convert the algorithm into a language the computer will understand, like the programming languages c++ or python.

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

{% capture tabs %}
<div class="tabs">
  <ul class="tab-titles">
      <li><a class="active">C++</a></li>
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

## Open Source Projects

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

You can find more projects in my [Github Account](https://github.com/arnegockeln){:target="_blank"}.

## Standing Invitation

In 2018 I moved to **Hamburg** and every day I look forward to new discoveries and contacts. I am always interested in meeting new people and exchanging ideas. So here's my suggestion: if you feel like talking to me about business and software development, then I invite you to get in touch with me.

Especially if you are in **Hamburg**! Then I would also like to meet you personally. The first cup of tea or coffee is on me!

{% capture socials %}
{% for s in site.data.social %}<a href="{{ s.url }}" target="_blank">{{ s.css }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}
{% endcapture %}

You can shoot me a message on {{ socials }} or by good old email: sayhi@gockeln.com.

Arne<br/>
*Algorithmic Adventurer*