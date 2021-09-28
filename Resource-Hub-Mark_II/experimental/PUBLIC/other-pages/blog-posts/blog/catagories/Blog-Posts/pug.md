<img src="https://hackernoon.com/hn-images/1*PmL3-GUNxYP26qTSlVrmzw.png" width="400" />

#### Jump to...

-   <a href="#syntax" class="btn">Syntax</a>
-   <a href="#render" class="btn">Rendering</a>
-   <a href="#options" class="btn">Method options</a>
-   <a href="#inheritance" class="btn">Inheritance</a>
-   <a href="#interpolation" class="btn">Interpolation</a>
-   <a href="#iteration" class="btn">Iteration</a>

Pug
===

-   Pug (formerly known as Jade) is a preprocessor which simplifies the task of writing HTML. It also adds a ton of functionality, such as Javascript objects, conditionals, loops, mixins and templates.
-   Pug fully integrates with Express, a popular Node.js web framework, as a supported view engine.

#### Installation

-   Pug is available via npm:  
    `npm install - g pug-cli`

#### Pug Syntax <a href="" id="syntax"></a>

-   **whitespace sensitive**: Pug uses indentation to work out with tags are nested inside each other.

        div.remark
          p Pug rocks!!

    The code above produces this:

        <div class="remark">
          <p>Pug rocks!!</p>
        </div>

    -   It doesn't matter what level of indentation you use, as long as the **level of indentation remains consistent**

-   **Pug doesn't have any closing tags**
    -   If no tag is specified, Pug will assume a `<div>` element.

#### Classes, IDs and Attributes

-   **Classes** are expressed as `.className`
-   **IDs** are expressed as `#IDname`
-   **Attributes** are added using brackets

#### Plain Text and Text Blocks

-   Pug provides various methods for adding plain text directly into the rendered HTML.
    -   Add plain text inline:  
        `h1.navbar-header We can write anything we want here …`
    -   Prefix a line with a pipe `|` character:

             p
              | You are logged in as
              | user@example.com

    -   When dealing with large blocks of text, you can just add a dot right after the tag name, or after the closing parenthesis, if the tag has attributes:

             p.
              HTML TEXT.....

#### Comments

-   Comments in Pug can be escaped similar to Javascript with `//`

         //- Invisible comment.
        //Visible comment.

#### Rendering Proccess of Pug <a href="" id="render"></a>

#### `pug.compile(source, options)`

-   will compile the Pug source code into a JavaScript function that takes a data object (called “locals”) as an argument.
-   Call that resultant function with your data, and voilà!, it will return a string of HTML rendered with your data.
-   The compiled function can be re-used, and called with different sets of data.
    -   **source**: `string`
        -   The source Pug template to compile
    -   **options**: `?options`
        -   An options object
    -   **returns**: `function`

        -   A function generate the HTML form an object containing locals

        <!-- -->

            var pug = require('pug');

            // Compile a function
            var fn = pug.compile('string of pug', options);

            // Render the function
            var html = fn(locals);
            // => '<string>of pug</string>'

#### `pug.render(source, options, callback)`

-   combines compiling and rendering into one step
-   the template function will be re-compiled every time `render` is called, which may impact performance.
    -   **source**: `string`
        -   The source Pug template to render
    -   **options**: `?options`
        -   An options object, also used as the locals object
    -   **callback**: `function`
        -   Node.js-style callback receiving the rendered results. This callback is called synchronously.
    -   **returns**: `string`

        -   The resulting HTML string

        <!-- -->

            var pug = require('pug');

            var html = pug.render('string of pug', options);
            // => '<string>of pug</string>'

#### Options <a href="" id="options"></a>

-   All API methods accept the following set of options:

<table><thead><tr class="header"><th>Option</th><th>Accepts</th><th>Action</th></tr></thead><tbody><tr class="odd"><td><code class="language-javascript">filename</code></td><td><code class="language-javascript">string</code></td><td>The name of the file being compiled. Used in exceptions, and required for relative <code class="language-javascript">include</code> \s and <code class="language-javascript">extend</code>\s. Defaults to <code class="language-javascript">Pug</code>.</td></tr><tr class="even"><td><code class="language-javascript">basedir</code></td><td><code class="language-javascript">string</code></td><td>The root directory of all absolute inclusion.</td></tr><tr class="odd"><td><code class="language-javascript">doctype</code></td><td><code class="language-javascript">string</code></td><td>If the <code class="language-javascript">doctype</code> is not specified as part of the template, you can specify it here. It is sometimes useful to get self-closing tags and remove mirroring of boolean attributes.</td></tr><tr class="even"><td><code class="language-javascript">filters</code></td><td><code class="language-javascript">object</code></td><td>Hash table of custom filters. Defaults to <code class="language-javascript">undefined</code>.</td></tr><tr class="odd"><td><code class="language-javascript">self</code></td><td><code class="language-javascript">boolean</code></td><td>Use a <code class="language-javascript">self</code> namespace to hold the locals. It will speed up the compilation, but instead of writing <code class="language-javascript">variable</code> you will have to write <code class="language-javascript">self.variable</code> to access a property of the locals object. Defaults to <code class="language-javascript">false</code>.</td></tr><tr class="even"><td><code class="language-javascript">debug</code></td><td><code class="language-javascript">boolean</code></td><td>If set to <code class="language-javascript">true</code>, the tokens and function body are logged to stdout.</td></tr><tr class="odd"><td><code class="language-javascript">compileDebug</code></td><td><code class="language-javascript">boolean</code></td><td>If set to <code class="language-javascript">true</code>, the function source will be included in the compiled template for better error messages (sometimes useful in development). It is enabled by default, unless used with Express in production mode.</td></tr><tr class="even"><td><code class="language-javascript">globals</code></td><td><code class="language-javascript">Array&lt;string&gt;</code></td><td>Add a list of global names to make accessible in templates.</td></tr><tr class="odd"><td><code class="language-javascript">cache</code></td><td><code class="language-javascript">boolean</code></td><td>If set to <code class="language-javascript">true</code>, compiled functions are cached. <code class="language-javascript">filename</code> must be set as the cache key. Only applies to <code class="language-javascript">render</code> functions. Defaults to <code class="language-javascript">false</code>.</td></tr><tr class="even"><td><code class="language-javascript">inlineRuntimeFunctions</code></td><td><code class="language-javascript">boolean</code></td><td>Inline runtime functions instead of <code class="language-javascript">require</code>-ing them from a shared version. For <code class="language-javascript">compileClient</code> functions, the default is <code class="language-javascript">true</code> (so that one does not have to include the runtime). For all other compilation or rendering types, the default is <code class="language-javascript">false</code>.</td></tr><tr class="odd"><td><code class="language-javascript">name</code></td><td><code class="language-javascript">string</code></td><td>The name of the template function. Only applies to <code class="language-javascript">compileClient</code> functions. Defaults to <code class="language-javascript">'template'</code>.</td></tr></tbody></table>

#### Template Inheritance <a href="" id="inheritance"></a>

-   Pug supports template inheritance. Template inheritance works via the `block` and `extends` keywords.

    #### `block`

    -   in a template, a `block` is simply a "block" of Pug that a child template may replace.
        -   This process is recursive
    -   Pug blocks can optionally provide default content.

    <!-- -->

        //- layout.pug
        html
          head
            title My Site - #{title}
            block scripts
              script(src='/jquery.js')
          body
            block content
            block foot
              #footer
                p some footer content

    -   Pug allows you to `replace` (default), `prepend`, or `append` blocks.

        -   When using `block append` or `block prepend`, the word “ `block`” is optional:

        <!-- -->

            //- page.pug
            extends layout

            append head
              script(src='/vendor/three.js')
              script(src='/game.js')

    #### `extends`

    -   extend block layout with a path to the parent template
    -   define one of more blocks to override the parent block content
    -   also possible to override a block to provide additional blocks

    <!-- -->

        //- page-a.pug
        extends layout.pug

        block scripts
          script(src='/jquery.js')
          script(src='/pets.js')

        block content
          h1= title
          - var pets = ['cat', 'dog']
          each petName in pets
            include pet.pug

#### Buffered vs Unbuffered Code

-   **Unbuffered code** starts with a minus ( `-`). It doesn’t directly add anything to the output, but its values may be used from within Pug.
-   **Buffered code**, on the other hand, starts with an equals ( `=`). It evaluates a JavaScript expression and outputs the result.

#### Interpolation <a href="" id="interpolation"></a>

-   String interpolation is the process of replacing one or more placeholders in a template with a corresponding value.

    -   buffered input offers one method of doing this.

-   Another is using `#{}`. Here, Pug will evaluate any code between the curly brackets, escape it, and render it into the template

    <table><thead><tr class="header"><th>Syntax</th><th>Action</th></tr></thead><tbody><tr class="odd"><td><code class="language-javascript">res.render(path, variables)</code></td><td>Searches for a pug file to render at path "path", and passes "variables" to it</td></tr><tr class="even"><td><code class="language-javascript">#{variable}</code></td><td>Interpolates "variable" inline with the surrounding Jade code, after evaluating "variable"</td></tr><tr class="odd"><td><code class="language-javascript">!{variable}</code></td><td>Interpolates "variable" inline with the surrounding Jade code, without evaluating "variable".</td></tr><tr class="even"><td><code class="language-javascript">#[element]</code></td><td>Interpolates "element" inside of an existing Pug HTML element. Syntax of interpolated HTML elements is identical to that of normal HTML elements.</td></tr></tbody></table>

    <table><thead><tr class="header"><th>Parameter</th><th>Details</th></tr></thead><tbody><tr class="odd"><td>path</td><td>Used in <code class="language-javascript">res.render</code>. This is the path of the Pug file that we are going to render. The path is taken from the root of the folder set on your Express app: <code class="language-javascript">app.set("views", "templates/views")</code>. For example, <code class="language-javascript">res.render("index")</code> will search for a Pug file at <code class="language-javascript">templates/views/index.pug</code>. Subdirectories can be specified too; <code class="language-javascript">res.render("admin/index")</code> looks for a Pug file at <code class="language-javascript">templates/views/admin/index.pug</code>.</td></tr><tr class="even"><td>variables</td><td>Used in <code class="language-javascript">res.render</code>. A JavaScript object of variables to be made accessible to the Pug file defined by <code class="language-javascript">path</code> (above). Within the Pug file, the keys of the above JavaScript object become available as variables. If <code class="language-javascript">variables = {title: "Hello", color: "red"}</code>, we could use the <code class="language-javascript">title</code> and <code class="language-javascript">color</code> variable. Subproperties of nested objects are also available.</td></tr><tr class="odd"><td>variable</td><td>Used in bracket syntax <code class="language-javascript">#{}</code> or <code class="language-javascript">!{}</code>. The value of <code class="language-javascript">variable</code> will be output in the context of its surrounding Pug code. If a pound symbol is prepended to the opening curly bracket, <code class="language-javascript">variable</code> will be evaluated before being output. If an exclamation point is prepended to the opening curly brace, <code class="language-javascript">variable</code> <strong>will not</strong> be evaluated.</td></tr><tr class="even"><td>element</td><td>Used in square bracket syntax <code class="language-javascript">#[]</code>. The HTML element (in Pug syntax, not normal HTML syntax) will be evaluated and output inline with the surrounding Pug code.</td></tr></tbody></table>

#### Iteration <a href="" id="iteration"></a>

-   Pug supports two primary methods of iteration: `each` and `while`.

    #### `each`

    Iterate over arrays and objects in a template:

        ul
          each val in [1, 2, 3, 4, 5]
            li= val

    Capture index as you iterate:

        ul
          each val, index in ['zero', 'one', 'two']
            li= index + ': ' + val

    Iterate over the keys in an object:

        ul
          each val, key in {1: 'one', 2: 'two', 3: 'three'}
            li= key + ': ' + val

    Add an `else` block in the case that the array or object are empty

        - var values = [];
        ul
          each val in values
            li= val
          else
            li There are no values

    #### `while`

    -   Create a loop with `while` keyword:

    <!-- -->

        - var n = 0;
        ul
          while n < 4
            li= n++

------------------------------------------------------------------------

------------------------------------------------------------------------

       - [Jump to...](#jump-to)

-   <a href="#pug" class="btn">Pug</a>  
    - <a href="#installation" class="btn">Installation</a>  
    - <a href="#pug-syntax-a-idsyntaxa" class="btn">Pug Syntax</a>  
    - <a href="#classes-ids-and-attributes" class="btn">Classes, IDs and Attributes</a>  
    - <a href="#plain-text-and-text-blocks" class="btn">Plain Text and Text Blocks</a>  
    - <a href="#comments" class="btn">Comments</a>  
    - <a href="#rendering-proccess-of-pug-a-idrendera" class="btn">Rendering Proccess of Pug</a>  
    - <a href="#pugcompilesource-options" class="btn"><code class="language-javascript">pug.compile(source, options)</code></a>  
    - <a href="#pugrendersource-options-callback" class="btn"><code class="language-javascript">pug.render(source, options, callback)</code></a>  
    - <a href="#options-a-idoptionsa" class="btn">Options</a>  
    - <a href="#template-inheritance-a-idinheritancea" class="btn">Template Inheritance</a>  
    - <a href="#buffered-vs-unbuffered-code" class="btn">Buffered vs Unbuffered Code</a>  
    - <a href="#interpolation-a-idinterpolationa" class="btn">Interpolation</a>  
    - <a href="#iteration-a-iditerationa" class="btn">Iteration</a>

<span id="sidebar-toc-btn">≡</span>
