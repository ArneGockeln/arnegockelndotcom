---
layout: page
title: Projekte
keywords: "apps, open source, fx, macos"
description: "Projekte und Apps von Arne Gockeln"
---
{% capture projectlist %}
{% for s in site.data.projects %}
{% assign mod = forloop.index | modulo: 2 %}
{% if mod == 1 %}<div class="row">{% endif %}
	<div class="col-sm-12 col-md-6"><h3><a href="{{ s.url }}" target="_blank">{{ s.name }}</a></h3> <p>{{ s.desc }}</p>
	</div>
{% if mod == 0 %}</div>{% endif %}
{% endfor %}
<!--/div-->
{% endcapture %}

## Apps
### FX Calculator
In [diesem Artikel]({{ site.url }}/2019/03/calculate-forex-position-and-margin-requirements.html) beschreibe ich wie Du die Positionsgröße und Marginanforderung für Forex Trades berechnest. Für diesen Vorgang habe ich eine kleine macOS App entwickelt. Am Ende des Artikels steht, wie Du die App herunterladen kannst.

## Open Source Projekte
{{ projectlist }}

Weitere Projekte findest Du in meinem [Github Account](https://github.com/arnegockeln){:target="_blank"}.