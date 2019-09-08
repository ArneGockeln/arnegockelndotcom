---
layout: page
title: "Contact"
keywords: "contact, arne gockeln"
description: "How to contact Arne Gockeln"
---
{% capture socials %}
{% for s in site.data.social %}<a href="{{ s.url }}" target="_blank">{{ s.css }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}
{% endcapture %}

You can shoot me a message on {{ socials }} or by good old email: info [at] gockeln [dot] com.

{% include invitation.html %}
