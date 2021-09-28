&lt;!DOCTYPE html&gt;

When I thought of decoupling modules in [Whatznear](http://whatznear.com), first thing I want to get rid of using `$.trigger` for each and everything. That doen’t mean I don’t wanna trigger events anymore, but I want some other way for modules to communicate with others and it should not make themselves dependencies. Thus I though of introducing a `Mediator` for inter module communication. I introduced Mediator along with [Module pattern](/2014/11/javascript-extending-module.html).

    Mediator = (function () {
      var subscribe = function (channel, func, context) {
        if (!Mediator.channels[channel]) {
          Mediator.channels[channel] = [];
        }
        Mediator.channels[channel].push({ context: context, callback: func });
        return this;
      };

      var publish = function (channel) {
        if (!Mediator.channels[channel]) {
          return;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        var subscripions = Mediator.channels[channel];
        for (i = 0; i < subscripions.length; i++) {
          subscripion = channels[i];
          subscripion.callback.apply(subscripion.context, args);
        }
        return this;
      };

      return {
        channels: [],
        publish: publish,
        subscribe: subscribe,
      };
    })();

Using `$.on` and `$.trigger` introduces unnecessary dom dependencies between modules, but in Mediator all the modules have only one dependency `Mediator`. All the modules can now subscribe to an event using `subscribe` method.

    Mediator.subscribe("some-event", func, this);

Also any module can publish event using `publish` method.

    Mediator.publish("some-event");
