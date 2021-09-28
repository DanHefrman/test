ActiveResource can be used with nested resources, provided you need to pass the parameters accordingly. ActiveResource call it as `prefix options` that used with nested resource. Its a bit tricky to pass the prefix options to different methods, since methods use different approach to accept prefix params. Lets consider we have a model for Inventory like on below,

{% highlight ruby %} class Inventory &lt; ActiveResource::Base self.prefix = ‘/api/admin/stores/:store\_id/’ end {% endhighlight %}

The prefix option `:store_id` is passed to various method in different ways. Make sure you use the same key as you specified in the `self.prefix`.

On find()
=========

For `find()` method you can pass the `:store_id` in `:params` hash, as second parameter.

{% highlight ruby %}

.find()
=======

Inventory.find(params\[:id\], params: { store\_id: params\[:store\_id\]}) {% endhighlight %}

On save()
=========

For `save()` you can’t pass it as second parameter. So you need to explicitly set on the object before calling the `.save()` method.

{% highlight ruby %}

.save()
=======

<span class="citation" data-cites="inventory">@inventory</span> = Inventory.new(params\[:inventory\]) <span class="citation" data-cites="inventory.prefix_options">@inventory.prefix\_options \[:store\_id\]</span> = <span class="citation" data-cites="store.id">@store.id</span> <span class="citation" data-cites="inventory.save">@inventory.save</span> {% endhighlight %}

On update\_attributes()
=======================

`.update_attributes()` won’t accept any second parameter, so you need to pass it with other params.

{% highlight ruby %}

.update\_attibutes()
====================

params\[:inventory\]\[:store\_id\] = <span class="citation" data-cites="store.id">@store.id</span> <span class="citation" data-cites="inventory.update_attributes">@inventory.update\_attributes</span>(params\[:inventory\]) {% endhighlight %}
