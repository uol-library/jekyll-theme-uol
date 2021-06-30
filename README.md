# University of Leeds Jekyll Theme

Jekyll theme based on the [University of Leeds Design System](https://designsystem.leeds.ac.uk).

## Theme configuration

The [University of Leeds Design System](https://designsystem.leeds.ac.uk) contains multiple menu systems and areas on pages which can be configured to appear sitewide, in groups of pages, or on single pages. The design was built to cater for a large amount of content!

This theme allows you to use data files (in the `_data` directory) to store configuration for things like the main menu, subsection menu, footer menus and various "calls to action". These configuration options are stored in the file `navigation.yml`, but you can also use different configurations for different pages by using [Front Matter](https://jekyllrb.com/docs/front-matter/) to define a data file to use (which will override the configuration in `navigation.yml`). You can also use [Front Matter](https://jekyllrb.com/docs/front-matter/) to override both these methods at the page level.

## Page templates

The theme contains three page templates:

1. **Home page** - this is the most complex and is used for building home pages or landing pages for sections of the site. All content in this template must be placed in data files or front matter.
2. **Page** - this template is really simple but can contain complex content like tables and accordions.
3. **Post** - this is the main template for blog posts.

