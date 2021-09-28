Most time when I redirect the logs to a log file, I noticed that log are not written to log file in real time (synchronously), rather they will wait and flush a set of logs all together at some time. Its quite difficult for us to debug in this situtaion.

To avoid this, try the below snippet in your code.

{% highlight ruby %} $stdout.sync = true {% endhighlight %}

Happy debugging.
