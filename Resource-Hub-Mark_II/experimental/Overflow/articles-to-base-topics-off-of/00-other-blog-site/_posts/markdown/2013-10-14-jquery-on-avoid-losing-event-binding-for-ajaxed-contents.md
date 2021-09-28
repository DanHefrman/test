&lt;!DOCTYPE html&gt;

Problem
-------

Recently when I was working on a rails project I have to render the a partial after the form sumitted via `remote: true`. But then I noticed that the event binding stopped working after the rendering partial via `.js.erb`.

{% highlight js %} // list.js.erb $(‘.user-list’).html(&lt;%= j render partial: “user\_list” %&gt;); {% endhighlight %}

The user\_list consists of a table of users, In which the user details are shown when we click on the corresponding row. This is working fine when they are rendered from server. But the show details stopped working after we render the `list.js.erb` after the form submission.

{% highlight html %}

Name

Email

&lt;% <span class="citation" data-cites="user.each">@user.each</span> do | user | %&gt;

&lt;% user.name %&gt;

&lt;% user.email %&gt;

&lt;%= user.details %&gt;

&lt;% end %&gt;

{% endhighlight %}

The user-details row is initialy hidden by css. The below code is used to show the hidden details of the user.

{% highlight js %} // users.js $(‘.user’).on(‘click’,function(e){ $(e.currentTarget).next(‘tr.user-details’).fadeToggle(500) }) {% endhighlight %}

But after renedering `list.js.erb` the click event on `.user` didn’t get fired.

The real problem
----------------

I hope everyone undestood the problem. The actual issue has nothing to do with rails. The real problem was my understanding of `$.on` method.

I initialy thought the [$.on](http://api.jquery.com/on/) is same as [$.live](http://api.jquery.com/live/) method, **Attach the event handler for the selector, now and in future**. Future means any element added to dom with selector even after the bindings are done.

But `$.on` will bind the event handlers only for the selector elements exists at the time of binding.

Since after rendering `list.js.erb` all the existing `tr.user` elements are replaced with new one’s. `$.on` won’t bind event handlers for the new one’s, hence the functionaly brokes.

Solution
--------

Now I am on to solution. After a lot of googling I found that the if I want `$.on` to work same as `$.live` I need to change how I bind the event handler to the elements.

The worked solution is,

{% highlight js %} // users.js $(document).on(‘click’,‘.user’, {} ,function(e){ $(e.currentTarget).next(‘tr.user-details’).fadeToggle(500) }) {% endhighlight %}

This will bind the event handlers to the DOM selector elements not only now, but also in future (selectors added to DOM after the bindings). Now the click event fires even the specific selectors are added or replaced with new DOM elements.

Hope this helped you.

PS : This soultion is not only for rails, but also help for the event bindings for the ajaxed contents.
