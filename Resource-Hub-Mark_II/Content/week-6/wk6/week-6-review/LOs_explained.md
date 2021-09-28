HTTP, Promises, and TDD (Week 6) - Learning Objectives
======================================================

HTTP (W6D1) - Learning Objectives
---------------------------------

### HTTP

1.  Match the header fields of HTTP with a bank of definitions.
    -   Host: Root path of our URI (typically a domain like appacademy.io, could also be an IP address)
    -   User-Agent: Information about which browser the request originated from
    -   Referer: The URL that you’re coming from (such as when you click a link to a new site)
    -   Accept: What the client can receive. May be expansive to accept all kinds of data, or limited, such as only accepting `application/json`
    -   Content-\*: Defines details about the body, indicating what format it is in, such as `application/json` or `application/x-www.form-urlencoded`
    -   Location: A server typically adds this to a response so that the client can perform a redirection
    -   Expires: When the response should be considered stale and needs to be refetched. Often used to cache a response so that subsequent requests can load directly from the cache instead of hitting the server.
    -   Set-Cookie: The server is telling the client to create/update a key/value pair in its cookies.
2.  Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses.
    -   GET: Direct requests. Do not contain a body, simply asking for data.
    -   PUT: Update a resource on the server. Contain the whole resource to be updated.
    -   PATCH: Update a resource on the server. Does not need to have the whole resource, usually just the identifier and what fields are being updated.
    -   POST: Creating a new resource on the server. Usually what is generated when we submit a form, with the form’s data being passed in the body of the request.
    -   DELETE: Destroy a resource on the server, such as removing a product, or logging out a user (destroying their session)
3.  Match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to their meanings.
    -   100s: Informational
    -   200s: Successful
        -   200 OK: received and fulfilled, typically with a body that has the requested data
    -   300s: Redirection
        -   302 Found: the resource has moved. We usually see this with a Location header, where a browser will automatically redirect the request to the new location.
    -   400s: Client Error
        -   400 Bad Request: General response that the server couldn’t understand your request. Often seen with typos, if a more specific 404 is not issued.
        -   401 Unauthorized: The resource may exist, but you’re not allowed to see it unless you are authorized. (Try logging in with valid credentials before sending the request again.)
        -   403 Forbidden: The resource may exist, but you’re not allowed to see it, even if you are logged in. Can also be seen if you’re trying to perform an action that is not allowed (such as creating a duplicate record). Maybe this is a resource that you need special permissions for, like admin access.
        -   404 Not Found: The resource doesn’t exist. It may be that it hasn’t been created, or that you just had a typo in what you were requesting.
    -   500s: Server Error
        -   500 Internal Server Error: The server tried to process your request, but something went wrong, typically there was some kind of runtime error in the server code due to your request.
4.  Send a simple HTTP request to google.com
    -   We can use netcat in the terminal to make a connection to a URL and send an HTTP request
    -   `nc google.com 80` opens our connection to google.com
    -   After we make our connection, we specify the three parts of an HTTP request:
        -   Request line
        -   Headers
        -   Body
    -   `GET / HTTP/1.1` creates the request-line, indicating our verb (GET), URI (/), and version (HTTP/1.1)
    -   any other headers we would like (optional), such as `Accept: application/json`
    -   body of the request (optional), such as `myKey=myValue`
5.  Write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.

    const http = require('http');

    http.createServer(function(request, response) {
        if (request.url === '/200') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<h1>Hello, world! Status 200 OK!</h1>');
        } else if (request.url === '/403') {
            response.writeHead(403, { 'Content-Type': 'text/html' });
            response.write('<h1>This is Forbidden! Status 403 Forbidden!</h1>');
        } else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write('<h1>What is that? Status 404 Not Found!</h1>');
        }
        response.end();
    }).listen(8080, function() {
        console.log('Listening for requests on port 8080...');
    })

Promises - Part 1 (W6D2) - Learning Objectives
----------------------------------------------

### Promises

1.  Instantiate a Promise object

-   We can instantiate a Promise object using the `new` keyword.
-   The Promise takes in a callback that we can invoke, taking in two arguments: typically labelled `resolve` and `reject`.
    -   `resolve` is invoked when we want to indicate our function has successfully completed. A value can be passed as the successful return value.
    -   `reject` is invoked when we want to indicate that our function failed in some way. A value can be passed as the fail value (what would be used in a `catch` or the second argument to `then`).

        function pause(numberOfSeconds) {
        return new Promise((resolve, reject) => {
          // resolve is invoked to indicate a success, reject is a failure
          // if a value is passed to resolve, it will be caught as the first argument to .then()
          // if a value is passed to reject, it will be caught as the first argument to .catch(), or the second argument to .then()
          setTimeout(() => resolve(), numberOfSeconds * 1000);
        });
        }

1.  Use Promises to write more maintainable asynchronous code
    -   We can chain .then calls on Promises, ensuring that the callback will not be run until the previous statement has finished executing.
    -   Prevents us from having to nest our callbacks

        // Without Promises, we have to nest our code.
        // These can get very confusing; this is a simple example, but it's already hard to tell what each setTimeout's delay is connected to.
        setTimeout(() => {
            console.log(message)
            setTimeout(() => {
                console.log(message.toUpperCase() + "!")
                setTimeout(() => {
                    console.log(message + "?")
                    setTimeout(() => {
                        console.log(message.toLowerCase() + "...")
                    }, 1 * 1000)
                }, 3 * 1000)
            }, 2 * 1000)
        }, 1 * 1000)

        // With Promises, we write more code up front in order for us to have more readable and maintainable code
        // We define our promises
        function promise1(message, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message)
                }, delay * 1000)
            })
        }

        function promise2(message, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message.toUpperCase() + "!")
                }, delay * 1000)
            })
        }

        function promise3(message, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message + "?")
                }, delay * 1000)
            })
        }

        function promise4(message, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message.toLowerCase() + "...")
                }, delay * 1000)
            })
        }

        // Then we chain can chain them however we like.
        // Returning our strings from our Promises is adding flexibility to our code, allowing us to use the results however we like.
        // We replaced the complicated nesting with more modular chaining of .then
        promise1("hello", 1)
            .then(res1 => {
                console.log(res1);
                return promise2("hi", 2);
            })
            .then(res2 => {
                console.log(res2);
                return promise3("hey", 3);
            })
            .then(res3 => {
                console.log(res3);
                return promise4("what's up", 1);
            })
            .then(res4 => {
                console.log(res4);
            });

2.  Use the fetch API to make Promise-based API calls

    // init is an optional object argument to customize the method (default is 'GET'), headers, or body of the request
    // For example, it could take the form:
        // const init = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"title": "Sir", "name": "Robin"}' }
    fetch(url, init).then(response => {
        // do something with the response
        // common first action to take would be parsing the response
            // parsing json with response.json(), or text with response.text()
    }).then(data => {
        // since fetch is returning a promise, we can chain on as many .then calls as we need
    })

Promises - Part 2 and HTML Review (W6D3) - Learning Objectives
--------------------------------------------------------------

### Promises

1.  Use async/await with promise-based functions to write asynchronous code that behaves synchronously.

    // Without async/await, we can use .then chains
    // We use a .catch method to catch errors
    function wrapper() {
      promise1("hello", 1)
        .then(res1 => {
          console.log(res1);
          return promise2("hi", 2);
        })
        .then(res2 => {
          console.log(res2);
          return promise3("hey", 3);
        })
        .then(res3 => {
          console.log(res3);
          return promise4("what's up", 1);
        })
        .then(res4 => {
          console.log(res4);
        })
        .catch(err => {
          console.error("Error encountered:", err)
        });;
    };

    wrapper();

    // With async/await, our code looks more like synchronous code
    // We use a standard try/catch block to handle errors
    // In order for us to use `await` we must be in a function declared with `async`
    async function wrapper() {
      try {
        console.log(await promise1("hello", 1));
        console.log(await promise2("hi", 2));
        console.log(await promise3("hey", 3));
        console.log(await promise4("what's up", 1));
      } catch (err) {
        console.error("Error encountered:", err)
      }
    }

    wrapper();

### HTML

Be comfortable with using the following tags. This is review/tangential material and will not be tested directly on the assessment, but if it would appear in a problem, you should know what it is doing.

the root element of the HTML document

valid child elements are

contains metadata for the HTML

often will include a

as well as and

allows us to add JavaScript to be run

can include code between tags, or provide a src

`src` attribute specifies the URL of the linked script (if this attribute is present, the

element must be empty)&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;h1&gt; … &lt;/h6&gt; &lt;ul&gt; &lt;li&gt;header tags&lt;/li&gt; &lt;li&gt;six versions (h1 through h6), indicating decreasing levels&lt;/li&gt; &lt;li&gt;default styling in browsers will make h1 largest, down to h6, but the semantic meaning of labeling a section is the importance&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt; &lt;/p&gt; &lt;ul&gt; &lt;li&gt;paragraph tags&lt;/li&gt; &lt;li&gt;allows us to add content typically displayed as blocks of text&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;article&gt; &lt;/article&gt; &lt;ul&gt; &lt;li&gt;a self-contained composition in a document, i.e., it could be consumed independently and not lose any meaning&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;section&gt; &lt;/section&gt; &lt;ul&gt; &lt;li&gt;a standalone section of the document&lt;/li&gt; &lt;li&gt;groups content, but might not be independently consumable like an article&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;main&gt; &lt;/main&gt; &lt;ul&gt; &lt;li&gt;the main/central content of the body&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;nav&gt;&lt;/nav&gt; &lt;ul&gt; &lt;li&gt;typically contains navigation links either to sections of the document or to other documents&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;header&gt; &lt;/header&gt; &lt;ul&gt; &lt;li&gt;introductory content for the page&lt;/li&gt; &lt;li&gt;we’ll often see elements such as headers, logo images, nav bars, etc.&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;footer&gt; &lt;/footer&gt; &lt;ul&gt; &lt;li&gt;opposite of &lt;header&gt; , typically will have supplement information at the bottom of a section or page&lt;/li&gt; &lt;li&gt;may include details such as copyright, links, author info, etc.&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;ul&gt; &lt;/ul&gt; &lt;ul&gt; &lt;li&gt;an unordered list&lt;/li&gt; &lt;li&gt;typically has many list elements ( &lt;li&gt; ) represented as bullet points&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;ol&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;an ordered list&lt;/li&gt; &lt;li&gt;typically has many list elements ( &lt;li&gt; ) represented as numbered or lettered entries&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;li&gt; &lt;/li&gt; &lt;ul&gt; &lt;li&gt;a list element&lt;/li&gt; &lt;li&gt;must be part of either an unordered ( &lt;ul&gt; ) or an ordered ( &lt;ol&gt; ) list&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;a&gt;&lt;/a&gt; &lt;ul&gt; &lt;li&gt;an anchor tag&lt;/li&gt; &lt;li&gt;creates a hyperlink to another resource&lt;/li&gt; &lt;li&gt;&lt;code&gt;href&lt;/code&gt; attribute specifies the URL for the desired link content&lt;/li&gt; &lt;li&gt;content inside the element (between the opening and closing tags) will be what is shown on the page as the clickable link&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;img&gt; &lt;ul&gt; &lt;li&gt;embeds an image into the document&lt;/li&gt; &lt;li&gt;&lt;code&gt;src&lt;/code&gt; attribute specifies the source, or path to the image that is to be displayed (can be an absolute URL or relative path)&lt;/li&gt; &lt;li&gt;&lt;code&gt;alt&lt;/code&gt; attribute gives a text description of the image. It is used by screen readers and is also displayed if the image cannot be rendered for whatever reason&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;table&gt; &lt;/table&gt; &lt;ul&gt; &lt;li&gt;encloses elements that represent data to be represented in a table format (all elements below can be included)&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;thead&gt; &lt;/thead&gt; &lt;ul&gt; &lt;li&gt;defines a header for a table, typically housing the row that represents column headers&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tbody&gt; &lt;/tbody&gt; &lt;ul&gt; &lt;li&gt;defines the body of the table, as opposed to the head or foot.&lt;/li&gt; &lt;li&gt;rows in the body represent the actual data of the table&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tfoot&gt; &lt;/tfoot&gt; &lt;ul&gt; &lt;li&gt;defines the final, summarizing set of rows in a table&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tr&gt; &lt;/tr&gt; &lt;ul&gt; &lt;li&gt;defines a row in the table&lt;/li&gt; &lt;li&gt;seen in all three sections, head, body, and foot&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;th&gt; &lt;/th&gt; &lt;ul&gt; &lt;li&gt;defines a cell header&lt;/li&gt; &lt;li&gt;in a row in the body, this may be the label for that row&lt;/li&gt; &lt;li&gt;in a row in the head, there may be many of these elements in order to label each column&lt;/li&gt; &lt;li&gt;&lt;code&gt;scope&lt;/code&gt; attribute tells us whether this is a header for a ‘row’ or a ‘column’&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;td&gt; &lt;/td&gt; &lt;ul&gt; &lt;li&gt;defines a data cell&lt;/li&gt; &lt;li&gt;these are the main elements that compose a row in the body of the table ( &lt;tbody&gt; )&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;h2 id="testing-in-javascript-w6d4---learning-objectives"&gt;Testing in JavaScript (W6D4) - Learning Objectives&lt;/h2&gt; &lt;h3 id="testing"&gt;Testing&lt;/h3&gt; &lt;ol type="1"&gt; &lt;li&gt;Explain the “red-green-refactor” loop of test-driven development.&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;Red: Write tests and watch them fail (protect against false positives)&lt;/li&gt; &lt;li&gt;Green: Write the minimum amount of code to get the test to pass&lt;/li&gt; &lt;li&gt;Refactor: Refactor the written code so that it is easy to maintain and understand&lt;/li&gt; &lt;/ul&gt; &lt;ol start="2" type="1"&gt; &lt;li&gt;Identify the definitions of SyntaxError, ReferenceError, and TypeError&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;SyntaxError &lt;ul&gt; &lt;li&gt;an error in how the code is written&lt;/li&gt; &lt;li&gt;encountered at compile-time, ie the code cannot be parsed to determine the instructions&lt;/li&gt; &lt;li&gt;since our code cannot be run, SyntaxErrors cannot be caught by a try-catch block&lt;/li&gt; &lt;li&gt;common examples would be: &lt;ul&gt; &lt;li&gt;a misspelled function keyword (&lt;code&gt;funtion broken() {...}&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;incorrect number of curly braces&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;ReferenceError &lt;ul&gt; &lt;li&gt;when a nonexistent variable is referenced&lt;/li&gt; &lt;li&gt;most commonly seen when you mistype a variable name, or refer to one out of the current scope&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb6"&gt;&lt;pre class="sourceCode javascript"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb6-1" title="1"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;puppy&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb6-2" title="2"&gt;&lt;span class="va"&gt;console&lt;/span&gt;.&lt;span class="at"&gt;log&lt;/span&gt;(pupy)&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// mistyped variable name&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;div class="sourceCode" id="cb7"&gt;&lt;pre class="sourceCode javascript"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb7-1" title="1"&gt;&lt;span class="kw"&gt;function&lt;/span&gt; &lt;span class="at"&gt;callPuppy&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-2" title="2"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;puppy&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-3" title="3"&gt;&lt;span class="op"&gt;}&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-4" title="4"&gt;&lt;span class="va"&gt;console&lt;/span&gt;.&lt;span class="at"&gt;log&lt;/span&gt;(puppy)&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// puppy is not in scope, it was created in the callPuppy function&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/li&gt; &lt;li&gt;TypeError &lt;ul&gt; &lt;li&gt;when a variable or parameter is not of a valid type&lt;/li&gt; &lt;li&gt;can also be seen if we are trying to modify a value that cannot be changed (because a variable is declared with &lt;code&gt;const&lt;/code&gt; instead of &lt;code&gt;let&lt;/code&gt;, for example)&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb8"&gt;&lt;pre class="sourceCode javascript"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb8-1" title="1"&gt;&lt;span class="kw"&gt;let&lt;/span&gt; dog&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// Remember unassigned variables are undefined!&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb8-2" title="2"&gt;&lt;span class="at"&gt;dog&lt;/span&gt;()&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// TypeError: dog is not a function&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb8-3" title="3"&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb8-4" title="4"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;puppy&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb8-5" title="5"&gt;puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;apple&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// TypeError: Assignment to constant variable.&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/li&gt; &lt;/ul&gt; &lt;ol start="3" type="1"&gt; &lt;li&gt;Create, modify, and get to pass a suite of Mocha tests&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;File Structure &lt;ul&gt; &lt;li&gt;Mocha will expect a &lt;code&gt;test&lt;/code&gt; directory at the location that we are running our &lt;code&gt;mocha&lt;/code&gt; command (typically the top level of our project)&lt;/li&gt; &lt;/ul&gt; &lt;pre&gt;&lt;code&gt;testing-demo └── problems └── reverse-string.js test └── reverse-string-spec.js&lt;/code&gt;&lt;/pre&gt;&lt;/li&gt; &lt;li&gt;Setting up &lt;code&gt;describe&lt;/code&gt; and &lt;code&gt;it&lt;/code&gt; blocks &lt;ul&gt; &lt;li&gt;We want to keep our tests organized just like our code.&lt;/li&gt; &lt;li&gt;A &lt;code&gt;describe&lt;/code&gt; block gives a high level indication of what we are going to be testing, like the name of the function.&lt;/li&gt; &lt;li&gt;An &lt;code&gt;it&lt;/code&gt; block tells us something that we are specifically testing. It defines an individual test that we are running.&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb10"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb10-1" title="1"&gt;&lt;span class="at"&gt;describe&lt;/span&gt; (&lt;span class="st"&gt;&\#39;reverseString()&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt; () &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb10-2" title="2"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&\#39;should reverse the input string&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt; () &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb10-3" title="3"&gt; &lt;span class="co"&gt;// a test will go here!&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb10-4" title="4"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;/a&gt; &lt;a class="sourceLine" id="cb10-5" title="5"&gt;&lt;span class="op"&gt;}&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/li&gt; &lt;li&gt;Using &lt;code&gt;assert&lt;/code&gt; to test &lt;ul&gt; &lt;li&gt;Inside our &lt;code&gt;it&lt;/code&gt; blocks we can use the &lt;code&gt;assert&lt;/code&gt; module to execute a test.&lt;/li&gt; &lt;li&gt;There are many different functions we can use in this module.&lt;/li&gt; &lt;li&gt;A very common one is to use the &lt;code&gt;strictEqual&lt;/code&gt; function, which compares two values. We can see other less common functions in the docs: https://nodejs.org/docs/latest-v12.x/api/assert.html\#&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb11"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb11-1" title="1"&gt;&lt;span class="co"&gt;// remember we required the assert module and reverseString function at the top of this file&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-2" title="2"&gt;&lt;span class="at"&gt;describe&lt;/span&gt;(&lt;span class="st"&gt;&quot;reverseString()&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-3" title="3"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&quot;should reverse the input string&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-4" title="4"&gt; &lt;span class="kw"&gt;let&lt;/span&gt; test &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="at"&gt;reverseString&lt;/span&gt;(&lt;span class="st"&gt;&quot;hello&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-5" title="5"&gt; &lt;span class="kw"&gt;let&lt;/span&gt; result &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;olleh&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-6" title="6"&gt; &lt;span class="co"&gt;// the line below is where the actual test is!&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-7" title="7"&gt; &lt;span class="va"&gt;assert&lt;/span&gt;.&lt;span class="at"&gt;strictEqual&lt;/span&gt;(test&lt;span class="op"&gt;,&lt;/span&gt; result)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-8" title="8"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb11-9" title="9"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;ul&gt; &lt;li&gt;Another common thing to test is that a function throws an error appropriately. We can use the &lt;code&gt;throws&lt;/code&gt; function, which accepts a callback to invoke, the error we expect when that callback is invoked, and a message to show if the fail doesn’t go through correctly. &lt;ul&gt; &lt;li&gt;It’s important to note here that if we expect our function to throw an error, we cannot invoke it immediately, or else our test file itself will error out. We need to surround it in another function creating a callback to be invoked later. Our assertion is then able to compare the error to the second argument.&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb12"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb12-1" title="1"&gt;&lt;span class="co"&gt;// note that we are passing function(){reverseString(3);} as an argument, not reverseString(3) directly&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-2" title="2"&gt;&lt;span class="at"&gt;context&lt;/span&gt;(&lt;span class="st"&gt;&quot;given an argument that is not a string&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-3" title="3"&gt;&lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&quot;should throw a TypeError when given an argument that is not a string&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-4" title="4"&gt; &lt;span class="va"&gt;assert&lt;/span&gt;.&lt;span class="at"&gt;throws&lt;/span&gt;(&lt;/a&gt; &lt;a class="sourceLine" id="cb12-5" title="5"&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-6" title="6"&gt; &lt;span class="at"&gt;reverseString&lt;/span&gt;(&lt;span class="dv"&gt;3&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-7" title="7"&gt; &lt;span class="op"&gt;},&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-8" title="8"&gt; TypeError&lt;span class="op"&gt;,&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-9" title="9"&gt; &lt;span class="st"&gt;&quot;this function only accepts string args&quot;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-10" title="10"&gt; )&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-11" title="11"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb12-12" title="12"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;ol start="4" type="1"&gt; &lt;li&gt;Use Chai to structure your tests using behavior-driven development principles.&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;The Chai testing library provides additional functionality compared to using the basic &lt;code&gt;assert&lt;/code&gt; module that comes with Node.&lt;/li&gt; &lt;li&gt;Since it is external, we need to add it to our project with &lt;code&gt;npm install chai&lt;/code&gt;&lt;/li&gt; &lt;li&gt;After adding the library, we can require it just like the &lt;code&gt;assert&lt;/code&gt; module with &lt;code&gt;const chai = require("chai");&lt;/code&gt; at the top of our test files.&lt;/li&gt; &lt;li&gt;Using &lt;code&gt;expect&lt;/code&gt; from the &lt;code&gt;chai&lt;/code&gt; library, we can chain “getters” together to construct tests that read like English. Since we use &lt;code&gt;expect&lt;/code&gt; so much in our code, we generally separate it out at the top once instead of for each test: &lt;code&gt;const expect = chai.expect;&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb13"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb13-1" title="1"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; chai &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="at"&gt;require&lt;/span&gt;(&lt;span class="st"&gt;&quot;chai&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-2" title="2"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; expect &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="va"&gt;chai&lt;/span&gt;.&lt;span class="at"&gt;expect&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-3" title="3"&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-4" title="4"&gt;&lt;span class="co"&gt;// don&\#39;t forget to import the class you are testing!&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-5" title="5"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; Dog &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="at"&gt;require&lt;/span&gt;(&lt;span class="st"&gt;&quot;../problems/dog.js&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-6" title="6"&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-7" title="7"&gt;&lt;span class="at"&gt;describe&lt;/span&gt;(&lt;span class="st"&gt;&quot;Dog Constructor Function&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-8" title="8"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&\#39;should have a &quot;name&quot; property&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-9" title="9"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; layla &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="kw"&gt;new&lt;/span&gt; &lt;span class="at"&gt;Dog&lt;/span&gt;(&lt;span class="st"&gt;&quot;Layla&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-10" title="10"&gt; &lt;span class="at"&gt;expect&lt;/span&gt;(layla).&lt;span class="va"&gt;to&lt;/span&gt;.&lt;span class="va"&gt;have&lt;/span&gt;.&lt;span class="at"&gt;property&lt;/span&gt;(&lt;span class="st"&gt;&quot;name&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-11" title="11"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-12" title="12"&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-13" title="13"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&\#39;should set the &quot;name&quot; property when a new dog is created&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-14" title="14"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; layla &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="kw"&gt;new&lt;/span&gt; &lt;span class="at"&gt;Dog&lt;/span&gt;(&lt;span class="st"&gt;&quot;Layla&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-15" title="15"&gt; &lt;span class="co"&gt;// we are using the eql function to compare the value of layla.name&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-16" title="16"&gt; &lt;span class="co"&gt;// with the provided string&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-17" title="17"&gt; &lt;span class="at"&gt;expect&lt;/span&gt;(&lt;span class="va"&gt;layla&lt;/span&gt;.&lt;span class="at"&gt;name&lt;/span&gt;).&lt;span class="va"&gt;to&lt;/span&gt;.&lt;span class="at"&gt;eql&lt;/span&gt;(&lt;span class="st"&gt;&quot;Layla&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-18" title="18"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb13-19" title="19"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;ul&gt; &lt;li&gt;This is a great cheatsheet for understanding what common chains are available to us: https://devhints.io/chai&lt;/li&gt; &lt;li&gt;We can also reference the docs for a more detailed explanation: https://www.chaijs.com/api/bdd/&lt;/li&gt; &lt;/ul&gt; &lt;ol start="5" type="1"&gt; &lt;li&gt;Use the pre- and post-test hooks provided by Mocha&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;We learned about four hooks &lt;ul&gt; &lt;li&gt;before(‘description’, callback): Callback is invoked before the block of test code is run&lt;/li&gt; &lt;li&gt;beforeEach(‘description’, callback): Callback is invoked before each &lt;code&gt;it&lt;/code&gt; statement in the block of test code&lt;/li&gt; &lt;li&gt;after(‘description’, callback): Callback is invoked after the block of test code is run&lt;/li&gt; &lt;li&gt;afterEach(‘description’, callback): Callback is invoked after each &lt;code&gt;it&lt;/code&gt; statement in the block of test code&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;before and beforeEach allows us to set up our test, pulling out common Arrange or Act portions of our tests&lt;/li&gt; &lt;li&gt;after and afterEach are going to be less common for us, but allow us to do any kind of cleanup that may be necessary after a test has run &lt;ul&gt; &lt;li&gt;Looking forward, maybe we need to remove something from our database that our test created&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;ol start="6" type="1"&gt; &lt;li&gt;Be familiar with &lt;code&gt;chai-spies&lt;/code&gt; and its ability to test how many times a function is invoked&lt;/li&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;After adding the &lt;code&gt;chai-spies&lt;/code&gt; package to our project with &lt;code&gt;npm install chai-spies&lt;/code&gt;, we can require it in our testing file. We are extending the functionality of the &lt;code&gt;chai&lt;/code&gt; library, which has the &lt;code&gt;use&lt;/code&gt; function to allow us to do so:&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb14"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb14-1" title="1"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; spies &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="at"&gt;require&lt;/span&gt;(&lt;span class="st"&gt;&quot;chai-spies&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb14-2" title="2"&gt;&lt;span class="va"&gt;chai&lt;/span&gt;.&lt;span class="at"&gt;use&lt;/span&gt;(spies)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;ul&gt; &lt;li&gt;After this initial setup, we can spy on a particular function by creating a spy:&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb15"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb15-1" title="1"&gt;&lt;span class="co"&gt;// \`on\` takes in the object that we are spying on and the method we want to specifically watch&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb15-2" title="2"&gt;&lt;span class="co"&gt;// Here we are saying to look at the layla object and track the calls to the chaseTail method&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb15-3" title="3"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; chaseTailSpy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="va"&gt;chai&lt;/span&gt;.&lt;span class="va"&gt;spy&lt;/span&gt;.&lt;span class="at"&gt;on&lt;/span&gt;(layla&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="st"&gt;&quot;chaseTail&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;ul&gt; &lt;li&gt;With our spy created, we can invoke whatever functions we would expect to call (or not call, if we are expecting 0 invocations) our method. We can then expect that our spy has been called any number of times:&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb16"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb16-1" title="1"&gt;&lt;span class="at"&gt;context&lt;/span&gt;(&lt;span class="st"&gt;&quot;with a valid number parameter&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-2" title="2"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&quot;should call the chaseTail method n times&quot;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="kw"&gt;function&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-3" title="3"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; chaseTailSpy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="va"&gt;chai&lt;/span&gt;.&lt;span class="va"&gt;spy&lt;/span&gt;.&lt;span class="at"&gt;on&lt;/span&gt;(layla&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="st"&gt;&quot;chaseTail&quot;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-4" title="4"&gt; &lt;span class="va"&gt;layla&lt;/span&gt;.&lt;span class="at"&gt;chainChaseTail&lt;/span&gt;(&lt;span class="dv"&gt;3&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-5" title="5"&gt; &lt;span class="co"&gt;// below is our actual test to see how many times our spy was invoked&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-6" title="6"&gt; &lt;span class="at"&gt;expect&lt;/span&gt;(chaseTailSpy).&lt;span class="va"&gt;to&lt;/span&gt;.&lt;span class="va"&gt;have&lt;/span&gt;.&lt;span class="va"&gt;been&lt;/span&gt;.&lt;span class="va"&gt;called&lt;/span&gt;.&lt;span class="at"&gt;exactly&lt;/span&gt;(&lt;span class="dv"&gt;3&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-7" title="7"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb16-8" title="8"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;div class="sourceCode" id="cb17"&gt;&lt;pre class="sourceCode js"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb17-1" title="1"&gt;&lt;span class="at"&gt;describe&lt;/span&gt;(&lt;span class="st"&gt;&\#39;myMap(array, callback)&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; () &lt;span class="kw"&gt;=&gt;&lt;/span&gt; &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-2" title="2"&gt; &lt;span class="kw"&gt;let&lt;/span&gt; inputArray&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-3" title="3"&gt; &lt;span class="kw"&gt;let&lt;/span&gt; callback &lt;span class="op"&gt;=&lt;/span&gt; (el) &lt;span class="kw"&gt;=&gt;&lt;/span&gt; el &lt;span class="op"&gt;+&lt;/span&gt; &lt;span class="dv"&gt;1&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-4" title="4"&gt; &lt;span class="at"&gt;beforeEach&lt;/span&gt;(() &lt;span class="kw"&gt;=&gt;&lt;/span&gt; &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-5" title="5"&gt; inputArray &lt;span class="op"&gt;=&lt;/span&gt; \[ &lt;span class="dv"&gt;1&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="dv"&gt;2&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="dv"&gt;3&lt;/span&gt; \]&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-6" title="6"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-7" title="7"&gt; &lt;span class="co"&gt;// ...other tests&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-8" title="8"&gt; &lt;span class="at"&gt;it&lt;/span&gt;(&lt;span class="st"&gt;&\#39;should not call Array\#map&\#39;&lt;/span&gt;&lt;span class="op"&gt;,&lt;/span&gt; () &lt;span class="kw"&gt;=&gt;&lt;/span&gt; &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-9" title="9"&gt; &lt;span class="co"&gt;// The object we are spying on is the inputArray&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-10" title="10"&gt; &lt;span class="co"&gt;// We want to make sure we don&\#39;t call \`map\` on it&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-11" title="11"&gt; &lt;span class="co"&gt;// We want our function do its own iteration and invocation&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-12" title="12"&gt; &lt;span class="co"&gt;// We are emulating Array\#map instead of calling it directly&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-13" title="13"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; mapSpy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="va"&gt;chai&lt;/span&gt;.&lt;span class="va"&gt;spy&lt;/span&gt;.&lt;span class="at"&gt;on&lt;/span&gt;(inputArray&lt;span class="op"&gt;,&lt;/span&gt; &lt;span class="st"&gt;&\#39;map&\#39;&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-14" title="14"&gt; &lt;span class="at"&gt;myMap&lt;/span&gt;(inputArray&lt;span class="op"&gt;,&lt;/span&gt; callback)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-15" title="15"&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-16" title="16"&gt; &lt;span class="at"&gt;expect&lt;/span&gt;(mapSpy).&lt;span class="va"&gt;to&lt;/span&gt;.&lt;span class="va"&gt;not&lt;/span&gt;.&lt;span class="va"&gt;have&lt;/span&gt;.&lt;span class="va"&gt;been&lt;/span&gt;.&lt;span class="at"&gt;called&lt;/span&gt;()&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-17" title="17"&gt; &lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb17-18" title="18"&gt;&lt;span class="op"&gt;}&lt;/span&gt;)&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;/body&gt; &lt;/html&gt;
