---
layout: home
title: Banners
datafile: examples
banners:
  - title: "Lorem Ipsum Dolor sit Amet Consectetural"
    imageurl: "/assets/img/placeholders/banner-01.jpg"
    imagealt: "University campus"
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus necessitatibus harum quo, nemo magni, dolorem natus atque provident suscipit itaque sit perspiciatis!"
    link: "/some-cta-link"
    linktext: "Some call to action"
  - title: "Lorem Ipsum Dolor sit Amet Consectetural"
    imageurl: "/assets/img/placeholders/banner-02.jpg"
    imagealt: "University campus"
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus necessitatibus harum quo, nemo magni, dolorem natus atque provident suscipit itaque sit perspiciatis!"
    link: "/some-cta-link"
    linktext: "Some call to action"
inlinectas: false
widgets:
  - type: content
    title: Banner example
    lead: | 
      Page banners are only available in the home page template. You can add up to 5 banners at the top of any page. Page banners can be set up in three different ways:
    content: |
      ### 1. Using page front matter for the data structure required by the banners.

      Banners require the following data structure:
      ```
      banners: 
        - title:
          imageurl:
          imagealt:
          text:
          link:
          linktext:
        - title
          ...
      ```
      If you place this in the front matter of a page, it will be used to generate banners for the page with title, text and links. **All the elements must be non-empty**.

      ### 2. Reference a data structure in the banners data file using page front matter

      This method is useful when you want to share banners on different pages. Each data structure in `_data/banners.yml` has a key which can be used to reference a banner data structure held in this file. For example, you can store data for a set of banners like this:
      ```
      banner1:
        - title:
          imageurl:
          ...
      ```
      Then reference the banners in the front matter of the page:
      ```
      banner: banner1
      ```
      You can store multiple banner sets in this file and use them throughout the site

      ### 3. Storing the banner data in the page's data file

      Each page on the site can have a corresponding data file by specifying the filename in the `datafile` front matter of the page. When a value is found for the `datafile` parameter, the file `_data/[datafile].yml` is used to look up data for the page. This file must have a data structure for the banners with the key `banner`.

permalink: /examples/banner/
---

