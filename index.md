---
layout: page
featuredimage: "/uploads/042019/anastasia-yilmaz-621512-unsplash-small.jpg"
featuredtitle: "I turn tea and algorithms into opportunities"
has_featured: true
---
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

Let's get in [contact]({{ site.url }}/contact.html) and drink a cup of tea together!

Arne<br/>
*Algorithmic Adventurer*