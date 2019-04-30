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
This is an example to write an algorithm which finds the fibonacci series till terms <= 100

```conf
Step 1: Start
Step 2: Declare variables terms, a, b
Step 3: Initialize variables terms = 100, a = 1, b = 1
Step 4: Display a
Step 5: Repeat the steps until i <= terms
	5.1: a <- b
	5.2: b <- a + b
	5.3: Display b
Step 6: Stop
```

The python code for this algorithm would look like this

```python
terms = 100
a,b   = 1,1
print(str(a))
for i in range(terms - 1):
	a,b = b,a+b
	print(str(a))
```

## What is tea?

Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis (scientific name), an evergreen bush native to East Asia. After water, it is the most widely consumed drink in the world. (wikipedia)

{% include figure.html image="/uploads/042019/massimo-rinaldi-1306655-unsplash-small.jpg" w="1600" h="1200" caption="fresh green tea with mint" alt="fresh green tea with min picture" %}

An often surprising fact to tea novices is that all teas (Black, green, Oolong, White and Pu'erh) come from the same plant. The tea plant grows best in loose, deep soil, at high altitudes, and in sub-tropical climates. So, in short, "tea" is anything derived from the Camellia sinensis plant.

I drink green and black tea every day. Especially when I am using a code editor or when I have to create efficient algorithms.

Let's get in [contact]({{ site.url }}/contact.html) and drink a cup of tea together!

Arne<br/>
*Algorithmic Adventurer*