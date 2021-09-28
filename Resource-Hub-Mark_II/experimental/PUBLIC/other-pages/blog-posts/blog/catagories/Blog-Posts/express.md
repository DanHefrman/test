Express.js
==========

#### Jump to...

-   <a href="#routing" class="btn">Routing</a>
    -   <a href="#routingmethods" class="btn">Methods</a>
    -   <a href="#paths" class="btn">Paths</a>
    -   <a href="#parameters" class="btn">Parameters</a>
    -   <a href="#handlers" class="btn">Handlers</a>
-   <a href="#middleware" class="btn">Middleware</a>
    -   <a href="#sessions" class="btn">Sessions</a>
-   <a href="#properties" class="btn">Express Properties</a>
-   <a href="#methods" class="btn">Express Methods</a>
-   <a href="#forms" class="btn">Forms</a>

#### Installing Express

-   Open terminal window in your project folder and initialize npm  
    `npm init -y`
-   This should install `package.json` and `package-lock.json` in the root of your project.
-   Install Express 4.0  
    `npm install express@^4.0.0`
-   The `package.json` file will now list Express as a dependency:

<!-- -->

    {
     "name": "my-project-folder-name",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.17.1"
     }
    }

#### Creating an Express Application

-   Add a file named `app.js` and open in your code editor
-   Use the `require` directive to import the `express` model and assign it to a variable named `express`.

<!-- -->

    const express = require('express');

-   Assign the return value from the `express` function call to a variable named `app`:

<!-- -->

    const app = express();

-   The `app` variable holds a reference to an Express Application ( `app`) object. You'll call methods on the `app` object as you build out your web application.

### Routing <a href="" id="routing"></a>

-   **Routing** refers to determining how an application should respond to a client request
    -   Each route can have one or more handler functions, which are executed when the route is matched.
-   Route definition takes the following structure:  
    `app.METHOD(PATH, HANDLER)`
    -   `app` is an instance of express.
    -   `METHOD` is an HTTP request method, in lowercase.
    -   `PATH` is a path on the server.
    -   `HANDLER` is the function executed when the route is matched.
        -   You can provide multiple callback functions that behave like <a href="#middleware" class="btn">middleware</a> to handle a <a href="#methods" class="btn">request</a>.

#### Route Methods <a href="" id="routingmethods"></a>

-   A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

    -   `GET` and `POST` are two of the most commonly used HTTP methods, followed by `PUT` and `DELETE`.

-   #### `get()`

    -   to handle GET requests

    <!-- -->

        app.get('/', function (req, res) => {
          res.send('Hello from Express!');
        });

-   #### `post()`

    -   to handle POST requests

    <!-- -->

        app.post('/', function (req, res) {
          res.send('Got a POST request')
        })

-   #### `put()`

    -   to handle PUT requests

    <!-- -->

        app.put('/user', function (req, res) {
          res.send('Got a PUT request at /user')
        })

-   #### `delete()`

    -   to handle DELETE requests

    <!-- -->

        app.delete('/user', function (req, res) {
          res.send('Got a DELETE request at /user')
        })

#### Route Paths <a href="" id="paths"></a>

-   Route paths, in combination with a request method, define the endpoints at which requests can be made.
    -   Route paths can be strings, string patterns, or regular expressions.
    -   Route paths can be based on regular expressions by surrounding search string with `/`s

<a href="https://expressjs.com/en/guide/routing.html" class="btn">List of root paths</a>

#### Route Parameters <a href="" id="parameters"></a>

-   Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
    -   The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

             Route path: /users/:userId/books/:bookId
            Request URL: http://localhost:3000/users/34/books/8989
            req.params: { "userId": "34", "bookId": "8989" }

    -   To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

            app.get('/users/:userId/books/:bookId', function (req, res) {
              res.send(req.params)
            })

#### Route Handlers <a href="" id="handlers"></a>

-   You can provide multiple callback functions that behave like <a href="#middleware" class="btn">middleware</a> to handle a request.
-   Route handlers can be in the form of a function, an array of functions, or combinations of both.

    -   You can create chainable route handlers for a route path by using **`app.route()`**

    <!-- -->

        app.route('/book')
        .get(function (req, res) {
          res.send('Get a random book')
        })
        .post(function (req, res) {
          res.send('Add a book')
        })
        .put(function (req, res) {
          res.send('Update the book')
        })

    -   Use the `express.Router` class to create modular, mountable route handlers.
        -   A `Router` instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

### Middleware <a href="" id="middleware"></a>

-   **Express is a routing and middleware web framework** that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
-   Middleware functions are functions that have access to the request object ( `req`), the response object ( `res`), and the `next` function in the application’s request-response cycle.
    -   The `next` function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
-   Middleware functions can perform the following tasks:
    -   Execute any code.
    -   Make changes to the request and the response objects.
    -   End the request-response cycle.
    -   Call the next middleware in the stack.
-   If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

<!-- -->

    const express = require('express');
    const app = express();

    app.get('/', function(req, res, next) {
      next();
    });

    app.listen(3000)

-   `.get()`: HTTP method for which the middleware function applies
-   `'/'`: Path (route) for which the middleware function applies
-   `function`: The middleware function
-   `req`: HTTP request argument to the middleware function
-   `res`: HTTP response argument to the middleware function
-   **`next`**: Callback argument to the middleware function

#### Listening for HTTP Connections

-   To start the server listening for HTTP connections from clients, call the `app.listen()` method passing:

    -   The desired port to use
    -   An *optional* callback function

    <!-- -->

        const port = 8081;

        app.listen(port, () => console.log(`Listening on port ${port}...`));

#### Configurable Middleware

-   If you need your middleware to be configurable, export a function which accepts an options object or other parameters, which, then returns the middleware implementation based on the input parameters.

<!-- -->

    module.exports = function (options) {
      return function (req, res, next) {
        // Implement the middleware function based on the options object
        next()
      }
    }

The middleware can now be used as shown below.

    var mw = require('./my-middleware.js')

    app.use(mw({ option1: '1', option2: '2' }))

An Express Application can use the following types of middleware:

-   ##### Application-level middleware

    -   Bind application-level middleware to an instance of the `app` object by using the `app.use()` and `app.METHOD()` functions, where `METHOD` is the HTTP method of the request that the middleware function handles (such as `GET`, `PUT`, or `POST`) in lowercase.

-   ##### Router-level middleware

    -   Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.
    -   Load router-level middleware by using the `router.use()` and `router.METHOD()` functions.

-   ##### Error-handling

    -   Define <a href="https://expressjs.com/en/guide/error-handling.html" class="btn">error-handling</a> middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature ( `err`, `req`, `res`, `next`)):

            app.use(function (err, req, res, next) {
              console.error(err.stack)
              res.status(500).send('Something broke!')
            })

-   ##### Built-in middleware

<table><thead><tr class="header"><th>Function</th><th>Action</th><th>Arguments</th></tr></thead><tbody><tr class="odd"><td><code class="language-javascript">express.static(root, [options])</code></td><td>serves status assets such as HTML files, images, and so on.</td><td><code class="language-javascript">root</code>: specifies the root directory <code class="language-javascript">options</code>: <a href="https://expressjs.com/en/4x/api.html#express.static" class="btn">options object</a></td></tr><tr class="even"><td><code class="language-javascript">express.json([options])</code></td><td>parses incoming requests with JSON payloads</td><td><code class="language-javascript">options</code>: <a href="https://expressjs.com/en/4x/api.html#express.json" class="btn">options object</a></td></tr><tr class="odd"><td><code class="language-javascript">express.urlencoded([options])</code></td><td>parses incoming requests with URL-encoded payloads</td><td><code class="language-javascript">options</code>: <a href="https://expressjs.com/en/4x/api.html#express.urlencoded" class="btn">options object</a></td></tr></tbody></table>

-   ##### Third-party middleware

    -   Use third-party middleware to add functionality to Express apps.
    -   Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.  
        `$ npm install cookie-parser`
    -   The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

            const express = require('express')
            const app = express()
            const cookieParser = require('cookie-parser')

            // load the cookie-parsing middleware
            app.use(cookieParser())

### Sessions <a href="" id="sessions"></a>

-   Sessions build upon the idea of an HTTP cookie.
    -   Instead of storing data in the cookie itself, a unique identifier known as the **session ID** is stored. This session ID is linked to an object stored on the server.
-   Sessions give you a way to identify a series of requests as being connected to the same client.
    -   Once you know that a request is connected to a known client session, you can associate the data of that session without having to send that data to the client and rely upon them to send that data back to the server unaltered.

#### Installing Express sessions

     npm install express-session

#### Adding `express-session` middleware to the `app` module.

     const express = require('express');
    const session = require('express-session');

    const app = express();

    app.set('view engine', 'pug');
    app.use(session({
      secret: 'a5d63fc5-17a5-459c-b3ba-6d81792158fc',
      resave: false,
      saveUninitialized: false,
    }));

-   **`secret`**: This is the secret used to sign the session ID cookie. The secret value above was generated using the uuid npm package.

    -   The **uuid package** allows you to generate universally unique identifiers (UUIDs) from random cryptographically-strong values, a timestamp, or a user-supplied string.

-   **`resave`**: This option forces the session to be saved into the session store, even if the session was never modified during the request.

-   **`saveUninitialized`**: This forces an uninitialized session to be saved to the store. An uninitialized session is when a session is new but not modified.

    -   Not setting the resave and saveUninitialized options results in the following warning in the console:

             express-session deprecated undefined resave option; provide resave option app.js:8:9
            express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:8:9

-   **`name`**: By default, the express-session middleware uses the name `connect.sid`.

    -   it's important to set a specific name property and separate each application's session cookies from each other.

    #### Express-session options properties

    Option

#### Session Store

-   Every session store must be an EventEmitter and implement specific methods. The following methods are the list of required, recommended, and optional.

    -   **Required methods** are ones that this module will always call on the store.
    -   **Recommended methods** are ones that this module will call on the store if available.
    -   **Optional methods** are ones this module does not call at all, but helps present uniform stores to users.

    Method

-   You can also configure session cookies with the following options that are not set by default: `domain`

#### Drawbacks

-   Using sessions increases the overhead required to serve clients.
-   Server affinity, the ability of a router to send a request to the same server over and over for a specific client, can be an issue depending on the session store that you're using.

### Express Methods <a href="" id="methods"></a>

-   #### `express.json([options])`

-   This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

<a href="https://expressjs.com/en/4x/api.html#req" class="btn">Request</a>

<a href="https://expressjs.com/en/4x/api.html#app" class="btn">Application</a>

<a href="https://expressjs.com/en/4x/api.html#res" class="btn">Response</a>

<a href="https://expressjs.com/en/4x/api.html#router" class="btn">Router</a>

Middleware

`req.accepts()`

`app.delete()`

`res.`append() `()`

`router.all()`

`bodyParser()`

`req.acceptsCharsets()`

`app.disable()`

`res.attachment()`

`router.METHOD()`

`compress()`

`req.acceptsEncodings()`

`app.enable()`

`res.cookie()`

`router.param()`

`cookieParser()`

`req.acceptsLanguages()`

`app.engine()`

`res.clearCookie()`

`router.route()`

`cookieSession()`

`req.get()`

`app.get()`

`res.download()`

`router.use()`

`csrf()`

`req.is()`

`app.listen()`

`res.end()`

`errorHandler()`

`req.param()`

`app.method()`

`res.format()`

`methodOverride()`

`req.range()`

`app.param()`

`res.get()`

`morgan()`

`app.path()`

`res.json()`

`responseTime()`

`app.post()`

`res.links()`

`favicon()`

`app.put()`

`res.location()`

`directory()`

`app.render()`

`res.redirect()`

`serveStatic()`

`app.route()`

`res.render()`

`timeout()`

`app.set()`

`res.send()`

`vhost()`

`app.use()`

`res.sendFile()`

`session()`

`res.sendStatus()`

`res.set()`

`res.status()`

`res.type()`

`res.vary()`

### Express Properties <a href="" id="properties"></a>

Request

Response

Application

`req.app`

`res.app`

`app.locals`

`req.baseUrl`

`res.headersSent`

`app.mountpath`

`req.body`

`res.locals`

`req.cookies`

`req.fresh`

`req.hostname`

`req.ip`

`req.ips`

`req.method`

`req.originalUrl`

`req.params`

`req.path`

`req.protocol`

`req.query`

`req.route`

`req.secure`

`req.signedCookies`

`req.stale`

`req.subdomains`

`req.xhr`

### Forms <a href="" id="forms"></a>

-   The form is defined in HTML as a collection of elements inside `<form>...</form>` tags, containing at least one `input` element of `type="submit"`.

<!-- -->

    <form action="/team_name_url/" method="post">
        <label for="team_name">Enter name: </label>
        <input id="team_name" type="text" name="name_field" value="Default name for team.">
        <input type="submit" value="OK">
    </form>

#### Form Handling

-   The route sends our request to a controller function which performs any database actions required, including reading data from the models, then generates and returns an HTML page.
    -   the server also needs to be able to process the data provided by the user, and redisplay the form with error information if there are any problems.

##### Process flowchart for processing form requests

<img src="https://mdn.mozillademos.org/files/14478/Web%20server%20form%20handling.png" width="600" />

1.  Display the default form the first time it is requested by the user.

-   The form may contain blank fields (e.g. if you're creating a new record), or it may be pre-populated with initial values (e.g. if you are changing a record, or have useful default initial values).

1.  Receive data submitted by the user, usually in an HTTP POST request.
2.  Validate and sanitize the data.
3.  If any data is invalid, re-display the form—this time with any user populated values and error messages for the problem fields.
4.  If all data is valid, perform required actions (e.g. save the data in the database, send a notification email, return the result of a search, upload a file, etc.)
5.  Once all actions are complete, redirect the user to another page.

-   **Express itself doesn't provide any specific support for form handling operations, but it can use middleware to process `POST` and `GET` parameters from the form, and to validate/sanitize their values.**

#### Validation and Sanitazion

-   **Validation** checks that entered values are appropriate for each field (are in the right range, format, etc.) and that values have been supplied for all required fields.
-   **Sanitization** removes/replaces characters in the data that might potentially be used to send malicious content to the server.
    -   Installation:  
        `npm install express-validator`
    -   To use the validator in our controllers we have to require the functions we want to use from the 'express-validator/check' and 'express-validator/filter' modules, as shown below:

            const { body,validationResult } = require('express-validator');

        -   **`body([fields, message])`**: Specifies a set of fields in the request body (a `POST` parameter) to validate and/or sanitize along with an optional error message that can be displayed if it fails the tests
        -   **`validationResults(req)`**: Runs the validation, making errors available in the form of a `validation` result object.

#### Routes

-   In order to implement our form handling code, we will need two routes that have the same URL pattern.
    -   The first ( `GET`) route is used to display a new empty form for creating the object.

            // GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
            router.get('/genre/create', genre_controller.genre_create_get);

    -   The second route ( `POST`) is used for validating data entered by the user, and then saving the information and redirecting to the detail page (if the data is valid) or redisplaying the form with errors (if the data is invalid).

            // POST request for creating Genre.
            router.post('/genre/create', genre_controller.genre_create_post);

<a href="https://getbootstrap.com/docs/4.4/components/forms/" class="btn">Bootstrap Form Control</a>

Error Handling
--------------

-   If you need to use any of the special characters literally (actually searching for a "\*", for instance), you must escape it by putting a backslash in front of it.

-   Errors that occur in synchronous code inside route handlers and middleware require no extra work.

    -   If synchronous code throws an error, then Express will catch and process it.

#### The default error handler

-   Express comes with a built-in error handler that takes care of any errors that might be encountered in the app.
-   This default error-handling middleware function is added at the end of the middleware function stack.
-   If you pass an error to `next()` and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.
-   When an error is written, the following information is added to the response:
    -   The `res.statusCode` is set from `err.status` (or `err.statusCode`). If this value is outside the 4xx or 5xx range, it will be set to 500.
    -   The `res.statusMessage` is set according to the status code.
    -   The body will be the HTML of the status code message when in production environment, otherwise will be err.stack.
    -   Any headers specified in an `err.headers` object

Template Inheritance
--------------------

-   Pug supports template inheritance. Template inheritance works via the block and extends keywords.
-   In a template, a block is simply a “block” of Pug that a child template may replace. This process is recursive.
-   Pug blocks can provide default content, if appropriate. Providing default content is purely optional, though. The example below defines block scripts, block content, and block foot.

#### Block `append` / `prepend`

-   Pug allows you to `replace` (default), `prepend`, or `append` blocks.
    -   When using block append or block prepend, the word “block” is optional.
-   Note that only named blocks and mixin definitions can appear at the top (unindented) level of a child template.

-   <a href="#expressjs" class="btn">Express.js</a>  
    - <a href="#jump-to" class="btn">Jump to...</a>  
    - <a href="#installing-express" class="btn">Installing Express</a>  
    - <a href="#creating-an-express-application" class="btn">Creating an Express Application</a>
    -   <a href="#routing-a-idroutinga" class="btn">Routing</a>
        -   <a href="#route-methods-a-idroutingmethodsa" class="btn">Route Methods</a>
        -   <a href="#route-paths-a-idpathsa" class="btn">Route Paths</a>
        -   <a href="#route-parameters-a-idparametersa" class="btn">Route Parameters</a>
        -   <a href="#route-handlers-a-idhandlersa" class="btn">Route Handlers</a>
    -   <a href="#middleware-a-idmiddlewarea" class="btn">Middleware</a>
        -   <a href="#listening-for-http-connections" class="btn">Listening for HTTP Connections</a>
        -   <a href="#configurable-middleware" class="btn">Configurable Middleware</a>
    -   <a href="#sessions-a-idsessionsa" class="btn">Sessions</a>
        -   <a href="#installing-express-sessions" class="btn">Installing Express sessions</a>
        -   <a href="#adding-express-session-middleware-to-the-app-module" class="btn">Adding <code class="language-javascript">express-session</code> middleware to the <code class="language-javascript">app</code> module.</a>
        -   <a href="#session-store" class="btn">Session Store</a>
        -   <a href="#drawbacks" class="btn">Drawbacks</a>
    -   <a href="#express-methods-a-idmethodsa" class="btn">Express Methods</a>
    -   <a href="#express-properties-a-idpropertiesa" class="btn">Express Properties</a>
    -   <a href="#forms-a-idformsa" class="btn">Forms</a>
        -   <a href="#form-handling" class="btn">Form Handling</a>
            -   <a href="#process-flowchart-for-processing-form-requests" class="btn">Process flowchart for processing form requests</a>
        -   <a href="#validation-and-sanitazion" class="btn">Validation and Sanitazion</a>
        -   <a href="#routes" class="btn">Routes</a>
    -   <a href="#error-handling" class="btn">Error Handling</a>
        -   <a href="#the-default-error-handler" class="btn">The default error handler</a>
    -   <a href="#template-inheritance" class="btn">Template Inheritance</a>
        -   <a href="#block-append-prepend" class="btn">Block <code class="language-javascript">append</code> / <code class="language-javascript">prepend</code></a>

<span id="sidebar-toc-btn">≡</span>
