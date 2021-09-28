&lt;!DOCTYPE html&gt;

In **Rails 3.2**, there are predefined tasks to run Test::Unit tests like `rake test:units`, `rake test:functionals` etc. But when you are developing, you may need to run a single test or tests from a file. None of the rake tasks provide this in Rails 3.2.

I like to show you how you can do this with [zeus](https://github.com/burke/zeus).

What’s this zeus?
=================

Zeus is rails application preloader. It preload your rails environment so that you run rake tasks, server and console with in 1-2 seconds. It reloads itself when ever you make any changes to initializers or do a bundle. It will saves you from rails booting.

`zeus test` is coupled with some handy hacks which will let you run your tests easily. You can run all tests in a file or a single test.

Run tests in a single file
==========================

You can run tests from a single file by just passing the file path to `zeus test` {% highlight sh %} zeus test test/functional/some\_test.rb {% endhighlight %}

Run a single test
=================

Consider this as your test case.

{% highlight ruby linenos %}

test/functional/some\_controller\_test.rb
=========================================

class SomeControllerTest &lt; ActionController::TestCase def setup

end

test ‘should create’ do \# your test end end {% endhighlight %}

Think that in the above case you need to run only **should create**. With zeus there are multiple ways to run single test.

\#1
===

You can use pass the test case as underscored and prepend with **test\_** which makes **test\_should\_create** and pass to `-n` option.

{% highlight sh %} zeus test test/functional/some\_controller\_test.rb -n test\_should\_create {% endhighlight %}

\#2
===

Another similar method is passing the test case in double quotes to `-n` option. Don’t forget to prepend **test** before test case. {% highlight sh %} zeus test test/functional/some\_controller\_test.rb -n “test should create” {% endhighlight %}

\#3
===

The third method felt more comfortable for me. Just append **:&lt;line\_no of test case&gt;** to the file path. {% highlight sh %} zeus test test/functional/some\_controller\_test.rb:7 {% endhighlight %}

Here **7** is the line number of `test "should create"`.

In **Rails 4**, you can pass the filename to the rake tasks and **Rails 4.1** will ship with [spring](https://github.com/jonleighton/spring) preloader. But still I believe zeus will be my favorite to run tests.

Happy testing.
