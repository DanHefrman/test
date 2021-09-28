<a href="https://html-css-js.com/html/" class="html">HTML</a><a href="https://html-css-js.com/css/" class="css">CSS</a><a href="https://html-css-js.com/js/" class="js">JS</a>

-   [Editor](https://htmlg.com/html-editor/)
-   [Tags](https://html-css-js.com/html/tags/)
-   <a href="https://htmlcheatsheet.com/" class="activeMenuItem">Cheat Sheet</a>
-   [Characters](https://textfancy.com/characters/)
-   [Generators](https://html-css-js.com/html/generator/)
-   [Templates](https://html5-templates.com/)
-   [Blog](https://html-online.com/articles/category/html/)
-   [Links](https://html-css-js.com/html/links/)

<!-- -->

-   [Editor](https://html-css-js.com/css/editor/)
-   [Cheat Sheet](https://htmlcheatsheet.com/css/)
-   [Generators](https://html-css-js.com/css/generator/)
-   [Blog](https://html-online.com/articles/category/css/)
-   [Links](https://html-css-js.com/css/links/)

<!-- -->

-   [Editor](https://html-css-js.com/js/editor/)
-   [Compressor](https://html-css-js.com/js/compressor/)
-   [Cheat Sheet](https://htmlcheatsheet.com/js/)
-   <a href="https://htmlcheatsheet.com/jquery/" class="activeMenuItem">jQuery</a>
-   [Blog](https://html-online.com/articles/category/javascript/)
-   [Links](https://html-css-js.com/js/links/)

<a href="https://htmlcheatsheet.com/" class="homeMenu" title="HTML CSS JavaScript Home">HTML CSS JS</a>

-   <a href="https://htmlcheatsheet.com/" class="htmlColor" title="HTML Cheat Sheet">HTML</a>
-   <a href="https://htmlcheatsheet.com/css/" class="cssColor" title="CSS Cheat Sheet">CSS</a>
-   <a href="https://htmlcheatsheet.com/js/" class="jsColor" title="JS Cheat Sheet">JS</a>
-   <a href="https://htmlcheatsheet.com/jquery/#" class="jqColor" title="jQuery Cheat Sheet"><span>jQ</span></a>
-   <a href="https://htmlcheatsheet.com/amp/" class="ampColor" title="AMP HTML Cheat Sheet"><span>⚡</span> AMP</a>
-   <a href="https://htmlcheatsheet.com/seo/" class="seoColor" title="SEO Cheat Sheet"><strong>SEO</strong></a>

<img src="./Online%20jQuery%20Cheat%20Sheet_files/logo-jquery.png" alt="jQuery Cheat Sheet" width="36" height="50" /> jQuery CheatSheet
=======================================================================================================================================

Hide comments

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Basics
------

Introduction to jQuery programming

#### Include

[Download](https://code.jquery.com/)

<span class="preToEditor">✎</span>

    <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

<span class="preToEditor">✎</span>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

#### Syntax

<span class="preToEditor">✎</span>

    $(document).ready(function(){
    $(".demo").click(function(){
        $(this).hide(200);
    });
    });

<span class="preToEditor">✎</span>

    $(function(){
    // Short Document Ready
    });

#### Each

<span class="preToEditor">✎</span>

    $(".demo").each(function() {                // parse each .demo element
    document.write($(this).text() + "\n");  // output their text
    });

#### Trigger

<span class="preToEditor">✎</span>

    $("a#mylink").trigger("click"); // triggers event on an element

#### noConflict

<span class="preToEditor">✎</span>

    var jq = $.noConflict();            // avoid conflict with other frameworks also using the dollar sign
    jq(document).ready(function(){
    jq("#demo").text("Hello World!");
    });

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Selectors
---------

Selectors to target elements. Similar to CSS.

<span class="preToEditor">✎</span>

    $("*")                      // all elements
    $("p.demo")                 // <p> elements with class="intro"
    $("p:first")                // the first <p> element
    $("p span")                 // span, descendant of p
    $("p > span")               // span, direct child of p
    $("p + span")               // span immediately proceeded by a p
    $("p ~ span")               // strong element proceeded by p
    $("ul li:first")            // the first <li> element of the first <ul>
    $("ul li:first-child")      // the first <li> element of every <ul>
    $("ul li:nth-child(3)")     // third child
    $("[href]")                 // any element with an href attribute
    $("a[target='_blank']")     // <a> elements with a target "_blank" attribute
    $("a[target!='_blank']")    // <a> elements with a target attribute value other than "_blank"
    $(":input")                 // all form elements
    $(":button")                // <button> and <input> elements of type="button"
    $("tr:even")                // even <tr> elements
    $("tr:odd")                 // odd <tr> elements
    $("span:parent")            // element which has child element
    $("span:contains('demo')")  // element conaining the specified text

#### Actions

**$(selector).action()**

<span class="preToEditor">✎</span>

    $(this).hide()      // the current element
    $("div").hide()     // all <div> elements
    $(".demo").hide()   // all elements with class="demo"
    $("#demo").hide()   // the element with id="demo"

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Events
------

Trigger jQuery events

<span class="preToEditor">✎</span>

    $(".demo").click(function(){
    $(this).hide(200);
    });

#### Mouse

scroll, click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, load, resize, scroll, unload, error

#### Keyboard

keydown, keypress, keyup

#### Form

submit, change, focus, blur

#### DOM Element

blur, focus, focusin, focusout, change, select, submit

#### Browser

load, resize, scroll, unload, error

#### .bind()

<span class="preToEditor">✎</span>

    $(document).ready(function() {              // attach a handler to an event for the elements        
    $("#demo").bind('blur', function(e) {
        //dom event fired
    });
    });

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Ads
---

Otherwise we're starving.

<span class="underline"></span>

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Effects
-------

Animation effects

#### Hide / Show

<span class="preToEditor">✎</span>

    $("#demo").hide();      // sets to display: none
    $("#demo").show(200);   // shows hidden elemnt with animation (speed)
    $("#demo").toggle();    // toggle between show and hide

    $( "#element" ).hide( "slow", function() {  // hide with callback function
    console.log( "Animation complete." );
    });

#### Fade

fadeIn, fadeOut, fadeToggle, fadeTo

<span class="preToEditor">✎</span>

    $("#demo").fadeIn();                // fade in a hidden element
    $("#demo").fadeOut(300);            // fade out
    $("#demo").fadeToggle("slow");      // toggle between fadeIn and hadeOut
    $("#demo").fadeTo("slow", 0.25);    // fades to 0.25 opacity

#### Slide

slideDown, slideUp, slideToggle

<span class="preToEditor">✎</span>

    $("#demo").slideDown();
    $("#demo").slideUp("slow");
    $("#demo").slideToggle();

#### Animate

$(selector).animate({params},speed,callback);

<span class="preToEditor">✎</span>

    $("div").animate({
    opacity: '0.5',
    left: '200px',
    height: '200px'
    });

#### stop() Method

<span class="preToEditor">✎</span>

    $("#demo").stop();

<span class="preToEditor">✎</span>

    $('#demo').mouseleave(function(event) {     // hover end
    $('.tab').stop().animate({              // stop() method
        opacity : '0.5',
        marginTop: '10px'
    }, 500, function() {                    // animation complete
        $('#demo').removeClass('hovered');  // callback function
    });
    });
    $('#demo').mouseover(function(event) {      // hover begin
    $('.tab').stop().animate({              // stop() method
        opacity : '1',
        marginTop: '0px'
    }, 300, function() {                    // animation complete
        $('#demo').addClass('hovered');     // callback function
    });
    });

#### Chaining

<span class="preToEditor">✎</span>

    $("#demo").css("backgroundColor", "green").slideUp(500).slideDown(500);

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

DOM Manipulation
----------------

Accessing and manipulating the Document Object Model

#### Content

<span class="preToEditor">✎</span>

    $("#demo").text();                  // returns text content
    $("#demo").html();                  // returns content, including HTML markup
    $("#demo").val();                   // returns field value
    $("#demo").html('Hey <em>yo</em>'); // sets HTML content

#### Attributes

<span class="preToEditor">✎</span>

    $("#link").attr("href");                    // get an attribute
    $("#link").attr("href",'https://htmlg.com'); // set attribute
    $("#link").attr({
    "href" : "https://htmlg.com",            // setting multiple attributes
    "title" : "HTML Editor"
    });
    $("#link").attr("href", function(i, origValue){
    return origValue + "/help";             // callback function gets and changes the attribute
    });

#### Add

<span class="preToEditor">✎</span>

    $(".demo").prepend("Yo!");          // adds content at the beginning in the selected elements
    $(".demo").append("<em>Hey!</em>"); // adds content at the end in the selected elements
    $(".demo").before("Cheers");        // adds content before the selected elements
    $(".demo").after("<em>Peace</em>"); // adds content after the selected elements

#### Remove

<span class="preToEditor">✎</span>

    $("#demo").remove();            // removes the selected element
    $("#demo").empty();             // removes children
    $("div").remove(".cl1, .cl2");  // removes divs with the listed classes

#### Classes

<span class="preToEditor">✎</span>

    $("#demo").addClass("big red"); // add class
    $("h1, p").removeClass("red");  // remove class
    $("#demo").toggleClass("big");  // toggle between adding and removing

#### CSS

<span class="preToEditor">✎</span>

    $("#demo").css("background-color");     // returns CSS value
    $("#demo").css("color", "blue");        // sets CSS rule
    $("#demo").css({"color": "blue", "font-size": "20px"}); // sets multiple CSS properties

#### Dimensions

width, height, innerWidth, innerHeight, outerWidth, outerHeight  
***inner** - includes padding  
**outer** - includes padding and border*

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Traversing
----------

Select elements based on their relation to other elements.

<span class="preToEditor">✎</span>

    $("#demo").parent();                // accessing direct parent
    $("span").parent().hide();          // changing parent color
    $("#demo").parents();               // all ancestors of the element
    $("#demo").parentsUntil("#demo2");  // all ancestors between two - demo is inside demo2
    $("#demo").children();              // all direct children
    $("#demo").children(".first");      // all direct children having a specified class
    $("#demo").find("span");            // all span elements inside #demo
    $("#demo").find("*");               // all descendants
    $("#demo").siblings("span");        // span siblings of #demo
    $("#demo").next();                  // the next sibling
    $("p").nextAll();                   // all next siblings
    $("#demo").nextUntil("#demo2");     // siblings between two arguments
    $("#demo").prev();                  // the previous sibling
    $("p").prevAll();                   // all previous siblings
    $("#demo").prevUntil("#demo2");     // previous siblings between two arguments

#### Filtering

<span class="preToEditor">✎</span>

    $("span strong").first();   // first strong in first span
    $("span strong").last();    // last strong in last span
    $("div").eq(9);             // element with a specific index
    $("div").filter(".big");    // all div elements with .big class
    $("div").not(".big");       // opposite of filter

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Ads
---

Otherwise we're starving.

<span class="underline"></span>

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Ajax
----

Exchanging data with the server dynamically updating parts of the page.

<span class="preToEditor">✎</span>

    $("#demo").load("file.txt h1.main");                                // returns the h1 tag in the text file
    $("#demo").load("file.txt", function(responseTxt, statusTxt, xhr){  // callback function
    if(statusTxt == "success") {
        document.write("Content loaded successfully!"); 
    } else {
        document.write("Error: " + xhr.status + ": " + xhr.statusText); 
    }
    });

#### $.get()

<span class="preToEditor">✎</span>

    $.get("demo.asp", function(data, status){       //$.get(URL,callback);
    document.write("Data: " + data + "\nStatus: " + status);
    });

#### $.post()

<span class="preToEditor">✎</span>

    $.post("demo.asp",      // send HTTP POST request to a page and get the answer
    {
    name: "John",       // send data
    age: 30
    },
    function(data, status){ //retreive response
    console.log("Data: " + data + "\nStatus: " + status);
    });

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Ads
---

Otherwise we're starving.

<span class="underline"></span>

<span class="panelHelp">?</span><span class="moveToTop">↖</span><span class="minimizePanel">x</span>

Useful Links
------------

A list of free useful resources.

[jQuery](https://jquery.com/) [jQuery UI](https://jqueryui.com/) [JS cleaner](https://html-cleaner.com/js/) [JS Obfuscator](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx) [Articles](https://html-online.com/articles/category/jquery/) [Can I use?](https://caniuse.com/)

<span id="editorsAnchor"></span>

<span class="undockPanel">↘</span>

HTML

    xxxxxxxxxx

1

CSS

    xxxxxxxxxx

1

<span id="applyCss">Apply CSS</span>

Preview

<span class="mce-txt">File</span>

<span class="mce-txt">Edit</span>

<span class="mce-txt">View</span>

<span class="mce-txt">Format</span>

<span class="mce-txt">Formats</span>

p

### Online jQuery Cheat Sheet

**jQuery Cheat Sheet will help you create the code for animations, various effects and other features for your website. Find the most common code snippets on a single page.**

Hide the green comments with the link in the top right corner of the site. Click the code snippets to highlight then copy-paste them in your project!

-   **Basics** – Introduction to jQuery syntax through commonly used code examles. Learn how to include jQuery in your [HTML](https://htmlcheatsheet.com/) code.
-   **Selector** – Similar to how we target [CSS](https://htmlcheatsheet.com/css/) elements in the style sheets, we use selectors.
-   **Events** – Just like we have [JavaScript](https://htmlcheatsheet.com/js/) events, we can set up listeners with jQuery.
-   **Effects** – Learn how to animate the HTML elements. Make them fade, slide or set up any other effect with custom CSS properties.
-   **Dom Manipulation** – It's easy to get and edit the content of a Document Object Model item.
-   **Traversing** – The way of targeting elements based on their hierarchy in the code. Imagine that the source of the page is a family tree where you can work with parents, children, siblings etc.
-   **Ajax** – Exchange data with the server to dynamically update parts of the page.
-   **Links** – Useful links and online tools to work with jQuery.

Make sure you save this link to help your next project.

HTML Cheat Sheet is using cookies. | [PDF](https://htmlcheatsheet.com/jquery/jQuery-Cheat-Sheet.pdf) | [Terms and Conditions, Privacy Policy](https://html-css-js.com/terms-privacy/)  
© HTMLCheatSheet.com

<a href="https://htmlcheatsheet.com/jquery/#" id="back2Top" title="Back to top">➤</a>
