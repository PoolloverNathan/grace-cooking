---
author: null
published: true
title: false
---
# {{site.name}}
{{site.description | default "*No description provided.*"}}

{% include pagecount %}

# First 5 Posts
{% for p in site.posts limit: 5 %}
<div class="rounded" style="background-color: {{site.card_color}};">
  <h2><a href="{{p.url}}">{{p.title}}</a></h2>
{% if p.author %}{% include author.html name=p.author %}{% endif %}
{{p.excerpt}}
</div>
{% endfor %}
