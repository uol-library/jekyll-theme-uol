---
title: Images
datafile: examples
permalink: /examples/images/
---

Images can be included in content either by using Markdown syntax:
```
![Image alt text](/imageurl.jpg)
```
For more control over the output, you can use an include file - this method is better because it uses the correct HTML markup and you can also add a caption to the image. For example the following code snippet:
```
{% raw %}
{% include components/image.html url="/assets/img/placeholders/banner-02.jpg" alt="The Fine Art Building" caption="The Fine Art Building - photograph &copy; University of Leeds" %}
{% endraw %}
```
Produces this:

{% include components/image.html url="/assets/img/placeholders/banner-02.jpg" alt="The Fine Art Building" caption="The Fine Art Building - photograph &copy; University of Leeds" %}

Images should always fill the width of the content, so should be at least 1000px wide.
