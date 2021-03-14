---
title: Authors
---
{%- for author in site.data.authors -%}
{%- assign authorname = author[0] -%}
{%- include author.html name=authorname -%}
{%- endfor -%}