---
layout: page
title: Accordions
datafile: examples
accordions:
  - title: Test accordion 3
    content: |
      This is some test content for an accordion in markdown

      * with a
      * bulleted
      * list

      #### and a subheading

      with some other text.
  - title: Test accordion 4
    content: Just a _bit_ of **text** here.
permalink: /examples/accordion/
---

Accordions loaded from the `_data` directory using `site.data.accordions.testacc`

{% include components/accordion.html accordion=site.data.accordions.testacc %}

Accordions loaded from the page frontmatter using `page.accordions`

{% include components/accordion.html accordion=page.accordions %}
