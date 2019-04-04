---
layout: page
title: "Blog"
keywords: "arne gockeln, software development, algorithmic trading, c++"
description: "The blog about thoughts and projects of Arne Gockeln"
---
{% for category in site.categories %}
  <h3>{{ category[0]|upcase }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.date|date_to_string }} / {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}