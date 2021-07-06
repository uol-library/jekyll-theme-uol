---
layout: page
title: Tables
datafile: examples
permalink: /examples/tables/
---

Tables can be included in pages using data from the `_data` directory and the table component. For example, take the following code:

```
{% raw %}
{% include components/table.html tabledata=site.data.cheeses tablecaption="Cheeses" sortablecols="1,4" %}
{% endraw %}
```
This will look in the `_data` directory for a file called `cheeses` - in this case it will find a file called `cheeses.csv` (see the [Jekyll datafile documentation](https://jekyllrb.com/docs/datafiles/) for details). It will then construct a table from the data using the table component in the theme, with the caption **Cheeses** and the first and fourth columns will be sortable.

This is the result:

{% include components/table.html tabledata=site.data.cheeses tablecaption="Cheeses" sortablecols="1,4" %}

