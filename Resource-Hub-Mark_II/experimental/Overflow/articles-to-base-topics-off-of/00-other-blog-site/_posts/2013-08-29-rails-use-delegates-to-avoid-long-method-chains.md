Consider you have two tables products and Oraganisation, where product belongs to a particular organisation.

    Product                   Organisation
      - id                      - id
      - name                    - name
      - organisation_id         - description

So when you want to get the organisation name, which the product belongs to then you say,

{% highlight ruby %}

Please note that thoughtout this post I will be refereing to `@product` which
=============================================================================

assumed as object of Product model.
===================================

<span class="citation" data-cites="product.organisation.name">@product.organisation.name</span> {% endhighlight %}

But according to “Rails Anti-patterns” more than one dot notation in a statement is an example of anti pattern.

Normal fix
==========

So How we can fix it, In Product model write a instance method `organisation_name` just like below.

{% highlight ruby %} class Product &lt; ActiveRecord::Base belongs\_to :organisation

def organisation\_name organisation.name end end {% endhighlight %}

Using delegate
==============

Writing methods for all the properties is a tedious task, Instead of that we can use [delegate](http://apidock.com/rails/Module/delegate) in rails.

You can simply use below code instead of writing a method `organisation_name`.

{% highlight ruby %} class Product &lt; ActiveRecord::Base belongs\_to :organisation

delegate :name, to: :organisation, prefix: true end {% endhighlight %}

Now you can use `@product.organisation_name` to instead of `@product.organisation.name`.

You can pass method name and target model/object via `:to` option. Here `:prefix` option determine whether the method name should prepend with object name or not.

If you wanna custom prefix, then

{% highlight ruby %} class Product &lt; ActiveRecord::Base belongs\_to :organisation

delegate :name, to: :organisation, prefix: :org end {% endhighlight %}

Now you can use as `@product.org_name`
