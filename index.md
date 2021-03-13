---
author: null
published: true
title: false
---
# {{site.name}}
{{site.description | default "*No description provided.*"}}

**{{site.posts.size}}** posts&emsp;**{{site.pages.size}}** pages&emsp;**{{site.data.authors.size}}** authors

# First 5 Posts
{% for p in site.posts limit: 5 %}
<div class="rounded" style="color: {{site.card_color}}">
## [{{p.title}}]({{p.url}})
{% if p.author %}{% include author.html name=p.author %}{% endif %}
{{p.excerpt}}
</div>
{% endfor %}
