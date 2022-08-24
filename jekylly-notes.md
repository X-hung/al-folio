<!-- ---
layout: post
title: Learning Notes for Jekyll
date: 2022-04-07 16:39:00
description: Learned from Jekyll official website
author: Hunter Xu
--- -->

## Frenquently used commands:
- `jekyll build`: create a _site directory.
- `jekyll serve`: after build, start the local server at `http://localhost:4000`

## Main entrance of Jekyll project:
- `/_layout/about.html` (in this project)
- `/blog/index.html`

## Liquid Template Languauge: 
- objects: `{{ object }}`
  - e.g. `{{ page.title }}`, `{{ site.data }}`
  - ref. https://jekyllrb.com/docs/variables/
- tags: `{% JavaScript code %}`
  - e.g. `{% if page.show_sidebar %}`
  - ref: https://jekyllrb.com/docs/liquid/tags/
- filters: `{{ object | filter }}` (CRUD-like operations, but more than CRUD)
  - e.g. {{ "hi" | capitalize }}
  - ref. https://jekyllrb.com/docs/liquid/filters/


## Front Matter (YAML-like)
is a snippet of YAML placed between two triple-dashed lines at the start of a file.


## Layouts
main entrance: `/_layouts/default.html`

layout separates common element across all pages to reduce the redundency

use layout in the front matter section at the top of each .html/.md page.

## Includes
main entrance: `/_includes`

Includes are useful for having a single source for source code that repeats around the site or for improving the readability.

practice: include `/_include/navigation.html` in `/_layout/default.html`

highlighting the current page (using CSS style): https://jekyllrb.com/docs/step-by-step/05-includes/#current-page-highlighting


## Data files
data file type: YAML, JSON, CSV

main entrance: _/data

example: 

Create a data file for the navigation at _data/navigation.yml with the following:

```
- name: Home
  link: /
- name: About
  link: /about.html
```

in `_includes/navigation.html`:

```
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link }}" {% if page.url == item.link %}style="color: red;"{% endif %}>
      {{ item.name }}
    </a>
  {% endfor %}
</nav>
```

## Assets
main entrance: /assets/css, images, js, media, etc.

Sass: https://jekyllrb.com/docs/step-by-step/07-assets/#sass


## Blogging
naming convension: `[YYYY-MM-DD]-[title].[md/html]`

control the layout of blogs: `/_layouts/post.html`

blog entrance page: `/blog.html`

list posts: https://jekyllrb.com/docs/step-by-step/08-blogging/#list-posts

## Collection (create pages for each author)

## Deployment
https://jekyllrb.com/docs/step-by-step/10-deployment/


## Next move
Why migrate from Jekyll to Morden SSG like Next.js, Gatsby.js: https://ghostinspector.com/blog/rebuilding-jekyll-website-next-js-theme-ui/
Ghost + Gatsby: https://gatsby.ghost.org/about/ 
With other Headless CMS: https://www.gatsbyjs.com/starters/#Blog 

### Migrating from Jekyll to Gatsby
https://www.gatsbyjs.com/blog/2017-11-08-migrate-from-jekyll-to-gatsby/
https://rsseau.fr/2021-10-02-migration-jekyll-gatsby-en
https://dev.to/deborahd/from-jekyll-to-gatsby-7-simple-steps-3an5
https://blog.elvessousa.com.br/en/post/jekyll-to-gatsby


### Use Gatsby as the static site generator
https://www.gatsbyjs.com/docs/glossary/static-site-generator/
https://www.gatsbyjs.com/features/jamstack/ 
https://jamstackthemes.dev/theme/gatsby-starter-glass/
https://jamstackthemes.dev/theme/graphcms-blog/


### Use Svlte with Jekyll
https://blog.logrocket.com/getting-started-svekyll-svelte-jekyll-hybrid/