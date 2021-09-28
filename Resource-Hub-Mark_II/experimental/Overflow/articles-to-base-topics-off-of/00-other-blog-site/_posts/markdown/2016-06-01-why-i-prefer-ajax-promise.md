&lt;!DOCTYPE html&gt;

When first learned `$.ajax` I was using `success` and `error` options for the async callbacks. Later when I learned more about `$.ajax` and promises I found `.done` and `.fail` methods are more easy and useful.

Usually I write a ajax call like below

      $.ajax({
        url: "/someurl",
        method: "GET",
        data: { 
          a: "a"
        },
        success: function(data) {
          console.log('success', data) 
        },
        error: function(xhr) {
          console.log('error', xhr);
        }
      })

But now a days I write using the `.done` and `.fail` methods.

      $.ajax({
        url: "/someurl",
        method: "GET",
        data: { 
          a: "a"
      })
      .done(function(data) {
        console.log('success', data) 
      })
      .fail(function(xhr) {
        console.log('error', xhr);
      });

For me the second method is better because of two reasons

Promise method can be used to bind multiple callbacks
-----------------------------------------------------

When using options for callbacks, I can’t pass more than 1 callback for success or fail option. But on the other hand youI bind any number of callbacks to `.done` and `.fail` like

      $.ajax({
        url: "/someurl",
        method: "GET",
        data: { 
          a: "a"
      })
      .done(function(data) {
        console.log('success callback 1', data) 
      })
      .done(function(data) {
        console.log('success callback 2', data) 
      })
      .fail(function(xhr) {
        console.log('error callback 1', xhr);
      })
      .fail(function(xhr) {
        console.log('error callback 2', xhr);
      });

This help you to smaller and compact functions, which lead to higher reusability and lower complexity. Also small functions are easier to unit test.

Promise can be used to bind callback conditionaly
-------------------------------------------------

When I want to do conditional functionality after a ajax call, If I am using an options I want to do condition checking inside the callback where as when using `.done` or `.fail` method I can bind the callback conditionaly.

      var jqXhr = $.ajax({
        url: "/someurl",
        method: "GET",
        data: { 
          a: "a"
      });

      if (someConditionIstrue) {
        jqXhr
        .done(function(data) {
          console.log('when condition is true', data);
        })
        .fail(function(xhr) {
          console.log('error callback for true condition', xhr);
        });
      } else {
        jqXhr.done(function(data){
          console.log('when condition is false', data);
        })
        .fail(function(xhr) {
          console.log('error callback for false condition', xhr);
        });
      }

if I want a common callback other than conditional ones, I can bind directly on `jqXhr` variable outside the if-else block.

      var jqXhr = $.ajax({
        url: "/someurl",
        method: "GET",
        data: { 
          a: "a"
      });

      jqXhr
      .done(function(data) {
        console.log('common callback', data);
      })
      .fail(function(xhr) {
        console.log('error common back', xhr);
      });

      // Conditional ones goes here

If you are intrested, I have a ealier blog post on [conditional callbacks in jQuery](/2014/11/jquery-set-ajax-callbacks-conditionally.html).

Thank You.
