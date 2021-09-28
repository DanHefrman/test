        I use [jsfiddle](http://jsfiddle.net/) for sharing, saving and embedding HTML, CSS and js snippets. Recently while embedding a snippet  I ran into a problem that I do not want to show js tab on the embed. Its only because the snippet contain only HTML and CSS. After googling I find the solution on [webnotwar](http://www.webnotwar.ca/jsfiddle-tips-and-tricks/).

Let this is my embed code of my snippet.

 So if you want to show only result, css and html tab just append result,css,html after **/embedded/** in source url of iframe like

See this hides the Javascript tab from embed.

The order of the tab depends on order of tab names after **/embedded/**, means if you give html,css, result the first tab will be html, then css as the second and at last the result.

You have to remember that, jsfiddle have initial focus on first tab after loading.

The snippets are taken from my own blog post on [phprepo](http://www.phprepo.in/2012/04/simple-drop-down-menu-without-javascript/).

$
