---
layout: page
title: About me
---
{% capture portrait %}
<div class="alignright" style="display: block; float: right">
    <img src="{{ site.url }}/assets/images/arne_gockeln_portrait.jpg" width="200" alt="Portrait Arne Gockeln"/>
</div>
{% endcapture %}
{% capture socials %}
{% for s in site.data.social %}<a href="{{ s.url }}" target="_blank">{{ s.css }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}
{% endcapture %}

## Hi
{{ portrait }}
my name is **Arne Gockeln** and I started software development in 1990. Since the year 2000 I have been involved in **professional custom software, linux and web development**, founding business ideas and working as a freelancer. 

## Freelance Work

As a freelancer I worked from small to large projects as a one man solution and as a team member. In most of the projects my main task was the implementation of custom software, connecting APIs or developing custom WordPress Plugins. Also I build a lot of Websites using WordPress and the Jekyll static site processor.

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

![TechStack logos c++,qt,php,python,debian,macos]({{ site.url }}/uploads/072019/techstacklogos.png)

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

### C++
```cpp
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
```

### PHP
```php
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
```

### Bash
```bash
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
```

### Swift
```swift
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
```

### JavaScript
```js
// Fibonacci Sequence in JavaScript
var terms = 10, a = 0, b = 1, fib = 0;
for(var i = 0; i <= terms; i++) {
    console.log(a);
    fib = a + b;
    a = b;
    b = fib;
}
```

### Python
```python
// Fibonacci Sequence in Python
def fib(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
        print(a)
```

## What is tea?

Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis (scientific name), an evergreen bush native to East Asia. After water, it is the most widely consumed drink in the world. (wikipedia)

![fresh green tea with mint picture]({{ site.url }}/uploads/042019/massimo-rinaldi-1306655-unsplash-small.jpg)

An often surprising fact to tea novices is that all teas (Black, green, Oolong, White and Pu'erh) come from the same plant. The tea plant grows best in loose, deep soil, at high altitudes, and in sub-tropical climates. So, in short, "tea" is anything derived from the Camellia sinensis plant.

I drink green and black tea every day. Especially when I am using a code editor or when I have to create efficient algorithms.

## Standing Invitation

In 2018 I moved to **Hamburg &#9875;** and every day I look forward to new discoveries and contacts. I am always interested in meeting new people and exchanging ideas. So here's my suggestion: if you feel like talking to me about business and software development, then I invite you to get in touch with me.

Especially if you are in Hamburg! Then I would also like to meet you personally. The first cup of tea or coffee is on me!

You can shoot me a message on {{ socials }} or by good old email: sayhi@gockeln.com.

Arne<br/>
*Algorithmic Adventurer*