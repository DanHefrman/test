HTTP
====

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
    -   GET: Direct requests. **Do not contain a body**, simply asking for data.
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
    -   After we make our connection, we specify the **three parts of an HTTP request**:
        -   Request line
        -   Headers
        -   Body
    -   `POST / HTTP/1.1` creates the request-line, indicating our verb (GET), URI (/), and version (HTTP/1.1)
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

Promises
========

Three states of a Promise - Pending - Fulfilled - Rejected

1.  Instantiate a Promise object

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
        function promise1(message, delay) { // "hello"
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message) // "hello"
                }, delay * 1000)
            })
        }

        function promise2(message, delay) { // message = "hi"
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message.toUpperCase() + "!") // "HI!"
                }, delay * 1000)
            })
        }

        function promise3(message, delay) { // "hey"
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message + "?") // "hey?"
                }, delay * 1000)
            })
        }

        function promise4(message, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(message.toLowerCase() + "...") // "what's up..."
                }, delay * 1000)
            })
        }

        // Then we chain can chain them however we like.
        // Returning our strings from our Promises is adding flexibility to our code, allowing us to use the results however we like.
        // We replaced the complicated nesting with more modular chaining of .then
        promise1("hello", 1)
            .then(res1 => {
                console.log(res1); // "hello"
                return promise2("hi", 2);
            })
            .then(res2 => {
                console.log(res2); // "HI!"
                return promise3("hey", 3);
            })
            .then(res3 => {
                console.log(res3); // "hey?"
                return promise4("what's up", 1);
            })
            .then(res4 => {
                console.log(res4); // "what's up..."
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

1.  Use async/await with promise-based functions to write asynchrnous code that behaves synchronously.

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

HTML
====

Be comfortable with using the following tags. This is review/tangential material and will not be tested directly on the assessment, but if it would appear in a problem, you should know what it is doing.

the root element of the HTML document

valid child elements are

contains metadata for the HTML

often will include a

as well as and

allows us to add JavaScript to be run

can include code between tags, or provide a src

`src` attribute specifies the URL of the linked script (if this attribute is present, the

element must be empty)&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;h1&gt; … &lt;/h6&gt; &lt;ul&gt; &lt;li&gt;header tags&lt;/li&gt; &lt;li&gt;six versions (h1 through h6), indicating decreasing levels&lt;/li&gt; &lt;li&gt;default styling in browsers will make h1 largest, down to h6, but the semantic meaning of labeling a section is the importance&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt; &lt;/p&gt; &lt;ul&gt; &lt;li&gt;paragraph tags&lt;/li&gt; &lt;li&gt;allows us to add content typically displayed as blocks of text&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;article&gt; &lt;/article&gt; &lt;ul&gt; &lt;li&gt;a self-contained composition in a document, i.e., it could be consumed independently and not lose any meaning&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;section&gt; &lt;/section&gt; &lt;ul&gt; &lt;li&gt;a standalone section of the document&lt;/li&gt; &lt;li&gt;groups content, but might not be independently consumable like an article&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;main&gt; &lt;/main&gt; &lt;ul&gt; &lt;li&gt;the main/central content of the body&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;nav&gt;&lt;/nav&gt; &lt;ul&gt; &lt;li&gt;typically contains navigation links either to sections of the document or to other documents&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;header&gt; &lt;/header&gt; &lt;ul&gt; &lt;li&gt;introductory content for the page&lt;/li&gt; &lt;li&gt;we’ll often see elements such as headers, logo images, nav bars, etc.&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;footer&gt; &lt;/footer&gt; &lt;ul&gt; &lt;li&gt;opposite of &lt;header&gt; , typically will have supplement information at the bottom of a section or page&lt;/li&gt; &lt;li&gt;may include details such as copyright, links, author info, etc.&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;ul&gt; &lt;/ul&gt; &lt;ul&gt; &lt;li&gt;an unordered list&lt;/li&gt; &lt;li&gt;typically has many list elements ( &lt;li&gt; ) represented as bullet points&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;ol&gt; &lt;/ol&gt; &lt;ul&gt; &lt;li&gt;an ordered list&lt;/li&gt; &lt;li&gt;typically has many list elements ( &lt;li&gt; ) represented as numbered or lettered entries&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;li&gt; &lt;/li&gt; &lt;ul&gt; &lt;li&gt;a list element&lt;/li&gt; &lt;li&gt;must be part of either an unordered ( &lt;ul&gt; ) or an ordered ( &lt;ol&gt; ) list&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;a&gt;&lt;/a&gt; &lt;ul&gt; &lt;li&gt;an anchor tag&lt;/li&gt; &lt;li&gt;creates a hyperlink to another resource&lt;/li&gt; &lt;li&gt;&lt;code&gt;href&lt;/code&gt; attribute specifies the URL for the desired link content&lt;/li&gt; &lt;li&gt;content inside the element (between the opening and closing tags) will be what is shown on the page as the clickable link&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;img&gt; &lt;ul&gt; &lt;li&gt;embeds an image into the document&lt;/li&gt; &lt;li&gt;&lt;code&gt;src&lt;/code&gt; attribute specifies the source, or path to the image that is to be displayed (can be an absolute URL or relative path)&lt;/li&gt; &lt;li&gt;&lt;code&gt;alt&lt;/code&gt; attribute gives a text description of the image. It is used by screen readers and is also displayed if the image cannot be rendered for whatever reason&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;table&gt; &lt;/table&gt; &lt;ul&gt; &lt;li&gt;encloses elements that represent data to be represented in a table format (all elements below can be included)&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;thead&gt; &lt;/thead&gt; &lt;ul&gt; &lt;li&gt;defines a header for a table, typically housing the row that represents column headers&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tbody&gt; &lt;/tbody&gt; &lt;ul&gt; &lt;li&gt;defines the body of the table, as opposed to the head or foot.&lt;/li&gt; &lt;li&gt;rows in the body represent the actual data of the table&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tfoot&gt; &lt;/tfoot&gt; &lt;ul&gt; &lt;li&gt;defines the final, summarizing set of rows in a table&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;tr&gt; &lt;/tr&gt; &lt;ul&gt; &lt;li&gt;defines a row in the table&lt;/li&gt; &lt;li&gt;seen in all three sections, head, body, and foot&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;th&gt; &lt;/th&gt; &lt;ul&gt; &lt;li&gt;defines a cell header&lt;/li&gt; &lt;li&gt;in a row in the body, this may be the label for that row&lt;/li&gt; &lt;li&gt;in a row in the head, there may be many of these elements in order to label each column&lt;/li&gt; &lt;li&gt;&lt;code&gt;scope&lt;/code&gt; attribute tells us whether this is a header for a ‘row’ or a ‘column’&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;&lt;td&gt; &lt;/td&gt; &lt;ul&gt; &lt;li&gt;defines a data cell&lt;/li&gt; &lt;li&gt;these are the main elements that compose a row in the body of the table ( &lt;tbody&gt; )&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;h1 id="testing"&gt;Testing&lt;/h1&gt; &lt;ol type="1"&gt; &lt;li&gt;Explain the “red-green-refactor” (RGR) loop of test-driven development. &lt;ul&gt; &lt;li&gt;Red: Write tests and watch them fail (protect against false positives)&lt;/li&gt; &lt;li&gt;Green: Write the minimum amount of code to get the test to pass&lt;/li&gt; &lt;li&gt;Refactor: Refactor the written code so that it is easy to maintain and understand&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Identify the definitions of SyntaxError, ReferenceError, and TypeError &lt;ul&gt; &lt;li&gt;SyntaxError &lt;ul&gt; &lt;li&gt;an error in how the code is written&lt;/li&gt; &lt;li&gt;encountered at compile-time, ie the code cannot be parsed to determine the instructions&lt;/li&gt; &lt;li&gt;since our code cannot be run, SyntaxErrors cannot be caught by a try-catch block&lt;/li&gt; &lt;li&gt;common examples would be: &lt;ul&gt; &lt;li&gt;a misspelled function keyword (&lt;code&gt;funtion broken() {...}&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;incorrect number of curly braces&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;ReferenceError &lt;ul&gt; &lt;li&gt;when a nonexistent variable is referenced&lt;/li&gt; &lt;li&gt;most commonly seen when you mistype a variable name, or refer to one out of the current scope&lt;/li&gt; &lt;/ul&gt; &lt;div class="sourceCode" id="cb6"&gt;&lt;pre class="sourceCode javascript"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb6-1" title="1"&gt;&lt;span class="kw"&gt;const&lt;/span&gt; puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;puppy&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb6-2" title="2"&gt;&lt;span class="va"&gt;console&lt;/span&gt;.&lt;span class="at"&gt;log&lt;/span&gt;(pupy)&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// mistyped variable name&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; &lt;div class="sourceCode" id="cb7"&gt;&lt;pre class="sourceCode javascript"&gt;&lt;code class="sourceCode javascript"&gt;&lt;a class="sourceLine" id="cb7-1" title="1"&gt;&lt;span class="kw"&gt;function&lt;/span&gt; &lt;span class="at"&gt;callPuppy&lt;/span&gt;() &lt;span class="op"&gt;{&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-2" title="2"&gt; &lt;span class="kw"&gt;const&lt;/span&gt; puppy &lt;span class="op"&gt;=&lt;/span&gt; &lt;span class="st"&gt;&quot;puppy&quot;&lt;/span&gt;&lt;span class="op"&gt;;&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-3" title="3"&gt;&lt;span class="op"&gt;}&lt;/span&gt;&lt;/a&gt; &lt;a class="sourceLine" id="cb7-4" title="4"&gt;&lt;span class="va"&gt;console&lt;/span&gt;.&lt;span class="at"&gt;log&lt;/span&gt;(puppy)&lt;span class="op"&gt;;&lt;/span&gt; &lt;span class="co"&gt;// puppy is not in scope, it was created in the callPuppy function&lt;/span&gt;&lt;/a&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Create, modify, and get to pass a suite of Mocha tests&lt;/li&gt; &lt;li&gt;Use Chai to structure your tests using behavior-driven development principles.&lt;/li&gt; &lt;li&gt;Use the pre- and post-test hooks provided by Mocha &lt;ul&gt; &lt;li&gt;We learned about four hooks &lt;ul&gt; &lt;li&gt;before(‘description’, callback): Callback is invoked before the block of test code is run&lt;/li&gt; &lt;li&gt;beforeEach(‘description’, callback): Callback is invoked before each &lt;code&gt;it&lt;/code&gt; statement in the block of test code&lt;/li&gt; &lt;li&gt;after(‘description’, callback): Callback is invoked after the block of test code is run&lt;/li&gt; &lt;li&gt;afterEach(‘description’, callback): Callback is invoked after each &lt;code&gt;it&lt;/code&gt; statement in the block of test code&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;li&gt;before and beforeEach allows us to set up our test, pulling out common Arrange or Act portions of our tests&lt;/li&gt; &lt;li&gt;after and afterEach are going to be less common for us, but allow us to do any kind of cleanup that may be necessary after a test has run &lt;ul&gt; &lt;li&gt;Looking forward, maybe we need to remove something from our database that our test created&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt; &lt;/ol&gt; &lt;h2 id="assessment-structure"&gt;Assessment Structure&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;A little more than 50% will be Multiple Choice&lt;/li&gt; &lt;li&gt;Promises and Async/Await and Mocha/Chai&lt;/li&gt; &lt;li&gt;1 hour 40 minutes long&lt;/li&gt; &lt;/ul&gt; &lt;/body&gt; &lt;/html&gt;
