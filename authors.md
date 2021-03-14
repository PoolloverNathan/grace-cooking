---
title: Authors
---
{%- for author in site.data.authors -%}
{%- assign authorname = author[0] -%}
{%- include author.html name=authorname classes=rounded attributes='style="background-color: {{site.card_color}};"' -%}
{%- endfor -%}