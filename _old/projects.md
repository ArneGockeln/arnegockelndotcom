---
layout: page
title: Projects
keywords: "apps, open source, fx, macos"
description: "Projects and Apps of Arne Gockeln"
---
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

## Apps
### FX Calculator
In [this article]({{ site.url }}/2019/03/calculate-forex-position-and-margin-requirements.html) I discribed how to calculate the forex position size and margin requirements for different currency pairs. I wrote an macOS application to calculate everything on demand. Check the article with the download instructions at the end.

## Open Source Projects
{{ projectlist }}

You can find more projects in my [Github Account](https://github.com/arnegockeln){:target="_blank"}.