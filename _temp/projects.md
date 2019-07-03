---
layout: page
title: Projects
keywords: "arne gockeln, software development, c++"
description: "The projects that I am working on."
---
## Apps
### FX Calculator
In [this article]({{ site.url }}/2019/03/calculate-forex-position-and-margin-requirements.html) I discribed how to calculate the forex position size and margin requirements for different currency pairs. I wrote an macOS application to calculate everything on demand. Check [the article]({{ site.url }}/2019/03/calculate-forex-position-and-margin-requirements.html) with the download instructions at the end.

## Open Source Projects
<div class="row">
{% for s in site.data.projects %}
	<div class="col-sm-12 col-md-6"><br/><a href="{{ s.url }}" target="_blank"><h3>{{ s.name }}</h3></a>{{ s.desc }}</div>
{% endfor %}
</div>

You can find more on [Github/ArneGockeln](https://github.com/arnegockeln){:target="_blank"}.