---
title: Authors
---
{% for author in site.data.authors %}
{% include author.html name=author[0] %}
{% endfor %}