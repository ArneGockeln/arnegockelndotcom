---
layout: page
title: "Blog"
keywords: "software, development, algorithmic, trading, business"
description: "The blog about thoughts and projects of Arne Gockeln"
---
<ul>
{% for category in site.categories %}
    {% for post in category[1] %}
    <li>{{ post.date|date_to_string }} / {{ category[0] }} / <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
{% endfor %}
</ul>