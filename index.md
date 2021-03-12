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
## [{{p.name}}]({{p.url}})
{{author name=p.author}}
{{p.excerpt}}
{% else %}
No posts? Ridiculous.
{% endif %}
