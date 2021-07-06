---
layout: home
datafile: examples
title: Home Page Widget Examples
widgets:
  - type: content
    title: Home Page Widget Examples
    lead: This is a content widget, which can contain a mixture of text and images
    content: |
      The home page template has a different structure to standard pages and is made up entirely of widgets.

      Widgets are specified in the front matter of pages.

      ![Dame Barbara Hepworth](/assets/img/placeholders/banner-02.jpg)

      Images are only supported in content widgets using the syntax:

      ```
      ![alt text](/image_url.jpg)
      ```
      So they don't support captions like Featured Content Widgets do.
  - type: featured
    title: Featured Content Widget
    lead: Featured Content widgets have additional styling and are presented in columns
    image:
      title: Image
      url: /assets/img/placeholders/banner-01.jpg
      caption: Dame Barbara Hepwoth
    content: |
      Featured content widgets are ideal for showcasing parts of the site.
permalink: /examples/
---


