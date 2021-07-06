---
title: Quotes
datafile: examples
sectionmenu: null
permalink: /examples/quotes/
---

Quotes can be added to text using normal markdown syntax:
```
> This is a quote!
```
Produces:

> This is a quote!

For more control over the output, you can use an include file - for example:
```
{% raw %}
{% include components/quote.html content="This is a regular block quote with citation and link" cite="Andrew Lansley" citeurl="/examples/" %}
{% endraw %}
```
Produces this:

{% include components/quote.html content="This is a regular block quote with citation and link" cite="Andrew Lansley" citeurl="/examples/" %}

This method also allows you to take advantage of pull quotes which align to the right and left on larger screens. The following examples show how left and right aligned pull quotes work. In each case, some additional parameters are added to the include statement like this:
```
{% raw %}
{% include components/quote.html content="This is a right-aligned pull quote" align="right" type="pull" %}
{% endraw %}
```
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  

{% include components/quote.html content="This is a right-aligned pull quote" align="right" type="pull" %}

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 

{% include components/quote.html content="This is a left-aligned pull quote" align="left" type="pull" %}

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
