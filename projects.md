---
layout: page
title: Open Source / Projects
---

In my spare time I work on open source and personal software projects. Also I am heavily interested in algorithmic trading and building full automatic trading software.

Here is a little list of some software projects I am working on:

{% capture projectlist %}
{% for s in site.data.projects %}
  <h3>{{ s.name }} <a href="{{ s.url }}" target="_blank">github</a></h3> <p>{{ s.desc }}</p>
<hr/>
{% endfor %}
<!--/div-->
{% endcapture %}

{{ projectlist }}

In 2019 I decided to share my knowledge and meet with other great algorithmic trading adventurers. So I founded the [Algorithmic/Quantitative Trading Hamburg](https://www.meetup.com/de-DE/Algorithmic-Quantitative-Trading-Hamburg){:target="_blank"} Meetup. I would be happy to see you there!