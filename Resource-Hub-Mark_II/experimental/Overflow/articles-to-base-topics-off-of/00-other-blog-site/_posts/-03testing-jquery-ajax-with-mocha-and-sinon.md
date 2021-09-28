Recently I wrote a URL shortener in JavaScript  Soon after I finished I thought of writing tests for a ajax calls used in that. I wrote this as it should work with both in browser and node.js. The tests are run with mocha command without using phantomJS. You will find some extra code (commonJS pattern) to achieve this.

### What components I used

-   Mocha : as the testing framework 
-   jQuery : for ajax and deferred callbacks  (jQuery for node is used for tests)
-   Sinon   : for stubing the ajax call.

### What is sinon?

[Sinon](http://sinonjs.org/) is standalone test spies, stubs and mocks for JavaScript. It provides us the methods to stub and restore and spy on a method and also mock. So it help us to write tests without depending actual network calls.

### What is jQuery Deferred?

[Deferred](http://api.jquery.com/category/deferred-object/) is method is added to jQuery from v1.5. It helps us to register multiple callbacks as a queue and execute the queue one after the another. It can help you to write non-blocking code.

### Url shortner

As I said before we are using jQuery.ajax for api calls, for the browser we assume that the html page is already contains the jQuery. But to run on nodeJS we need to require the jQuery.

Now the shorten function, I created a Url module with shorten function which call the ajax with parameters reuired.

Now again to work with nodejs, we need to export the method. This will ensure that we can require this module in the test wo run in with nodejs.

The Final code code for the url module is available as [gist](https://gist.github.com/revathskumar/5071581#file-url_shorter-js).

### Url shortner Test

Now on to testing. First we will be require all the needed modules to run the test. It includes assert, sinson, jQuery and our url module.

    var assert = require('assert'),
      sinon = require('sinon'),
      $ = require('jquery'),
      url = require('../js/backbone/lib/url');

Next in the beforeEach we need to spy the callback to check whether it is called and also need to stub the ajax call. Here the sinon comes to action for stub and spy and jQuery Deferred for execute the success and fail callback as we needed and also making the test non-blocking.  
In AfterEach we need to restore the original ajax function, else the sinon will trow error while the next test saying you can’t stub the method already stubbed.

        beforeEach(function () {
          this.callback = sinon.spy();
          sinon.stub($, 'ajax', function (options) {
            var dfd = $.Deferred();
            if(options.success) dfd.done(options.success({status_code: 200, data: {url: "bit.ly/aaaa"}}));
            if(options.error) dfd.fail(options.error);
            dfd.success = dfd.done;
            dfd.error = dfd.fail;
            return dfd;
          });
     
        });
     
        afterEach(function () {
          $.ajax.restore();
        });

Now the test cases. I have written 4 of it. In those we will use Deferred.resolve and Deferred.reject to exectute the success and error callbacks.

I hope the Inline comments will explain rest of the things. now we wrap the cases and beforeEach and afterEach callbacks in a describe block.

Done!

Now we can execute it with mocha command. The whole test will be available as [gist](https://gist.github.com/revathskumar/5071581#file-url_shorter_test-js).

I hope you got a brief idea about how I tested the ajax call with help of sinon and $.Deferred

happy coding. ;)
