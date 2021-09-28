There are many times I need to execute the methods, which are triggered by an event handler/callbacks to execute without changing the context. It helps me to use instance variables or methods inside callback. I usually use [$.proxy](http://api.jquery.com/jQuery.proxy/) or [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method to achieve this.

When I was learning [CoffeeSctipt](http://coffeescript.org), I continued using the same. But later I came to know CoffeeScript have much handy way to do the same.

In CS, you can use Fat arrow functions for this.

{% highlight coffeescript %} class Form constructor: (root) -&gt; <span class="citation" data-cites="root">@root</span> = root; <span class="citation" data-cites="root.on">@root.on</span> ‘submit’, <span class="citation" data-cites="onSubmit">@onSubmit</span> <span class="citation" data-cites="root.on">@root.on</span> ‘submit’, <span class="citation" data-cites="onSub">@onSub</span>

onSub:(e) -&gt; console.log(this) return false;

onSubmit:(e) =&gt; console.log(this) return false; {% endhighlight %}

In the above code, I want to execute the `onSubmit` method in the context of `Form`. Since the `onSubmit` is trigger by the submit event, by default its context will be element which the event is binded.

I hope I am able to convince you the differece between thin arrow and fat arrow function. You can get the detailed description on the [CoffeeScript doc](http://coffeescript.org/#fat-arrow).

Also you can look into the [code generated](http://coffeescript.org/#try:class%20Form%0A%20%20constructor%3A%20(root)%20-%3E%0A%20%20%20%20%40root%20%3D%20root%3B%0A%20%20%20%20%40root.on%20'submit'%2C%20%40onSubmit%0A%20%20%20%20%40root.on%20'submit'%2C%20%40onSub%0A%0A%20%20onSub%3A(e)%20-%3E%0A%20%20%20%20console.log(this)%0A%20%20%20%20return%20false%3B%0A%20%20%0A%20%20onSubmit%3A(e)%20%3D%3E%0A%20%20%20%20console.log(this)%0A%20%20%20%20return%20false%3B) by CoffeeScript when you use fat arrow.

In ECMAScript 5
---------------

If you are using ECMAScript 5, As I saild before you can use [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method.

{% highlight coffeescript %} var Form = (function(){ function Form(root){ this.root = root; this.root.on(‘submit’, this.onSubmit.bind(this)); this.root.on(‘submit’, this.onSub); }

Form.prototype.onsubmit = function(e){ console.log(this) return false; }

Form.prototype.onSub = function(e){ console.log(this) return false; }

return Form; })() {% endhighlight %}
