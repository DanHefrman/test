&lt;!DOCTYPE html&gt;

Consider you wanna make sure a string is not empty as well as not nil. If you are using rails you have a [blank?](http://api.rubyonrails.org/classes/Object.html#method-i-blank-3F) method to do it. but what if you are not on rails?

As usual you will write a method something like

{% highlight ruby %} def is\_nil\_or\_empty? value value.empty? || value.nil? end {% endhighlight %}

But this will through error **undefined method empty?’ for nil:NilClass** when you pass a `nil` to this method, since `nil` doesn’t have a method called `empty?`.

So I recommend you to test `nil?` first, like

{% highlight ruby %} def is\_nil\_or\_empty? value value.nil? || value.empty? end {% endhighlight %}

So `value.nil?` will return `true` and ruby won’t check the second part since ruby uses [Short Circuit Evaluation](http://blog.revathskumar.com/2013/05/short-circuit-evaluation-in-ruby.html)

You can also convert the value to string before checking empty, so that you don’t wanna always follow this order.

{% highlight ruby %} def is\_nil\_or\_empty? value value.to\_s.empty? end {% endhighlight %}

This will work since `nil.to_s` will return an empty string.

If you pass `false` as boolean this method will return false, since `"false".empty?` will be false. If you are expecting other datatypes to this method then you will definity need more logic.

Happy coding. ;)
