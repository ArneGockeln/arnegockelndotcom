---
layout: post
title: "Finding a name for a company or a product"
date: 2019-04-30 13:14:35 +0200
author: Arne Gockeln
categories: [business]
keywords: "business, names"
description: "My process to generate a new business name"
---
For my next business I needed a name which is not already in use, where all domain names are free to register and which is under 100,000 search results on google. Also the name should be easy to remember and to speak. So the name should not be longer than 15 characters. Ah, and don't forget the social media handles for twitter, facebook, instagram and youtube. I am looking only for .de and .com top level domains.

Turns out that it's not that simple to find a good name. Most importantly because we are living in 2019 where most of the good domain names are already registered. If you are lucky the domain is for sell. But for very high prices. Like "algoritmica.com" for example. The owner sells it for $4,995. Also note the mispelling of the word "algoritmica" without "h".

But first things first. This is the process I went through:

When I started searching for a name I came up with some words which are describing the business field.

- algorithmic 
- trading
- quant
- quantitative
- code
- software
- logic
- capital
- tick

Just to name a few. All of these words are already registered of course. The funny thing is, most of them do not offer anything or they are providing content which does not rely on the name. "trading.com" -> 403 forbidden. "quant.com" -> domain is registered and parked. "code.com" redirects to a 404 of salesforce. "tick.com" -> for sale.

Then I tried some combinations like this:

- algorithmictrading
- quanttrading
- quantcode
- algologic
- quantcode
- quantick
- ...

What is the result? "algorithmictrading.com" -> parked on godaddy. "quanttrading.com" -> parked on godaddy. "quantcode.com" -> parked on godaddy. "algologic.com" -> parked. "quantcode.com" -> parked on godaddy. "quantick.com" -> registered, but no response. Hm.

For some of them I checked the google results plus if there is a company already using that name. If not I would consider to ask the owner if he or she wants to sell the domain for a good price.

- algorithmictrading -> 13mio results on google and > 15 characters
- quanttrading -> 545k results on google and a software company
- quantcode -> 24k results on google but name is already in use
- algologic -> 2mio results on google and a software company
- quantick -> a company is using this name

Ok, I need more combinations and a better way to check if the name is already in use or not.

To get more words and combinations I implemented a litte python script which combines words from two dictionaries in the ways A+B, B+A, A+A and B+B. You can find it on github: [https://github.com/arnegockeln/pynames](https://github.com/arnegockeln/pynames){:target="_blank"}

![pynames screenshot](/uploads/042019/pynames-screenshot.png)

I came up with a list of 42 words that are interesting for my business and with a second list of 42 endings like "fy", "nix", "tic" and so on. Note the number 42, the answer to all questions.

The total number of combinations is 7056. Well, that is a lot to check. So I decided to combine only A+B which is 1764 combinations. Of course this is a lot too. But you need to put in the work if you want to reach the top.

I found this nice little tool [https://thenameapp.com](https://thenameapp.com){:target="_blank"} on the internet.

![TheNameApp](/uploads/042019/thenameapp-screenshot.png)

With TheNameApp you can enter a word and it checks wether the domains .com, .net, .co, .me and .io are free to register AND it checks if the social media handles for twitter, facebook, instagram, youtube and tumblr are available. Very handy. 

But first I made a new list and added only the names that I was comfortable with. After that I checked them with thenameapp tool. If the .com domain and the twitter handle is free for registration I marked it as AVAILABLE, everything else is marked as N/A. So from my list of 137 possible names only 22 were available. 

In the process of going crazy in naming and online research I found another business idea, just by the name. Of course I registered the name and social media handles, just in case ;).

So for my business I registered the name "orbitsigma". 

Why? Because *orbit* is the term used in mathematics and the theory of dynamic systems to describe the set of states that a dynamic system assumes over time and in space travel means the elliptical orbit of a satellite, a rocket or the like around a larger celestial body. I am a big fan of science fiction, space travel and the like.

Lowercase *sigma* is used for the standard deviation of a population or probability distribution in statistics and uppercase *sigma* is used as a symbol for the summation operator and the covariance matrix of a set of random variables in probability theory and statistics. I make a lot of use of the probability theory and statistics for my algorithmic trading approach.

It took me about two weeks to come up with the result. I would say that is not too bad for a name finding process. 