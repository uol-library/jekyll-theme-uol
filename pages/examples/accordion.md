---
layout: page
title: Accordions
datafile: examples
accordions:
  - title: Test accordion 1
    content: |
      This is some test content for an accordion in markdown

      * with a
      * bulleted
      * list

      #### and a subheading

      with some other text.
  - title: Test accordion 2
    content: Just a _bit_ of **text** here.
permalink: /examples/accordion/
---

Accordions can be loaded using data in the page front matter - here we are using `page.accordions`.

{% include components/accordion.html accordion=page.accordions %}

This uses the following code in the markdown of this page:
```
{% raw %}
{% include components/accordion.html accordion=page.accordions %}
{% endraw %}
```
Accordions can also be loaded from the file `_data/accordions.yml` using the following syntax:
```
{% raw %}
{% include components/accordion.html accordion=site.data.accordions.ac1 %}
{% endraw %}
```
This would load the accordion data with the key `ac1` in this file. This same technique can be used to load accordion data from any data file - here the data is being loaded from the `_data/examples.yml` file:

{% include components/accordion.html accordion=site.data.examples.ac2 %}


{{ site.data[page.datafile].mainmenu | size | inspect }}
