&lt;!DOCTYPE html&gt;

When you want to ask a confirmation from user about leaving a webpage by closing or refreshing window when their work is not saved, you can use `window.onbeforeunload` event for it.

unlike other events the use of `confirm`, `alert` and `prompt` will be ignored inside `onbeforeunload` event. We should return the message that we want show to the user.

    window.onbeforeunload = function (e) {
      return "Are you sure you want leave?";
    };

if you are using jQuery,

    $(window).on("beforeunload", function (e) {
      return "Are you sure you want leave?";
    });

But if you want to support some IE versions, returning message won’t help you. You need to set the `event.returnValue` with the message.

    window.onbeforeunload = function (e) {
      message = "Are you sure you want leave?";
      e.returnValue = message;
      return message;
    };

If you want this prompt to be conditional then,

    window.onbeforeunload = function (e) {
      if (inputChanged) {
        var message = "Are you sure you want leave?";
        e.returnValue = message;
        return message;
      }
      return;
    };

Any value except `null` returned will be converted into string. You can unbind this event by assigning `null`.

    window.onbeforeunload = null;

and in jQuery, using `off` method.

    $(window).off("beforeunload");

Here is a demo on [jsbin](http://jsbin.com/bidehe/edit?html,js,output).
