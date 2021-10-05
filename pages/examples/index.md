---
layout: page
datafile: examples
title: Page Templates and Components
permalink: /examples/
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
---

This is an example of a page which uses the standard page template. Other templates in the theme are used for the <a href="{{ "/blog/" | absolute_url }}">main blog page</a> and for individual blog posts.

Both pages and posts can contain **Components**, which allow editors to include complex HTML with minimal effort to include images, quotations, accordions and tables.

## Images

Images can be included in content by using Markdown syntax:
```
![Image alt text](/imageurl.jpg)
```
For more control over the output, you can use a component - this method is better because it uses the correct HTML markup and you can also add a caption to the image. For example the following code snippet:
```
{% raw %}
{% include components/image.html url="/assets/images/placeholders/banner-02.jpg" alt="The Fine Art Building" caption="The Fine Art Building - photograph &copy; University of Leeds" %}
{% endraw %}
```
Produces this:

{% include components/image.html url="/assets/images/placeholders/banner-02.jpg" alt="The Fine Art Building" caption="The Fine Art Building - photograph &copy; University of Leeds" %}

Images should always fill the width of the content, so should be at least 1000px wide.

## Quotes

Quotes can be added to text using normal markdown syntax:
```
> This is a quote!
```
Produces this:

> This is a quote!

For more control over the output, you can use a component - for example:
```
{% raw %}
{% include components/quote.html content="I think Universities are uniquely positioned to really help change the world" cite="Simone Buitendijk" citeurl="https://www.youtube.com/watch?v=3fdtEB88Mmk" %}
{% endraw %}
```
Produces this:

{% include components/quote.html content="I think Universities are uniquely positioned to really help change the world" cite="Simone Buitendijk" citeurl="https://www.youtube.com/watch?v=3fdtEB88Mmk" %}

## Accordions

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

## Tables

Tables can be included in pages using data from the `_data` directory and the table component. For example, take the following code:

```
{% raw %}
{% include components/table.html tabledata=site.data.cheeses tablecaption="Cheeses" sortablecols="1,4" %}
{% endraw %}
```
This will look in the `_data` directory for a file called `cheeses` - in this case it will find a file called `cheeses.csv` (see the [Jekyll datafile documentation](https://jekyllrb.com/docs/datafiles/) for details). It will then construct a table from the data using the table component in the theme, with the caption **Cheeses** and the first and fourth columns will be sortable.

This is the result:

{% include components/table.html tabledata=site.data.cheeses tablecaption="Cheeses" sortablecols="1,4" %}
