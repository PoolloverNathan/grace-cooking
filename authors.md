---
title: Authors
published: true
---
<div class=flex>
{%- for author in site.data.authors -%}
{%- assign authorname = author[0] -%}
{%- capture attrs -%}style="background-color: {{site.card_color}};"{%- endcapture -%}
{%- include author.html name=authorname classes="rounded" attributes=attrs -%}
{%- endfor -%}
</div>