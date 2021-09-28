Recently I was working on a rails app where its datasource was a API instead of a database. My team wants all the components to be seperate, thats the reason we go with this kind of architecture. We were using Rails 3.2 and ActiveResource for the frontend and of course our API is build with [rails-api](https://github.com/rails-api/rails-api).

Here is my sample data from the JSON API.

{% highlight js %} { store: { name: ‘some store’, description: ‘some description’, contacts: { phone: ‘0495-2414123’, email: ‘test@somestore.com’, mobile: ‘99950123456’ } } } {% endhighlight %}

ActiveResource will deal with the data pretty well except `contacts`. It tends to create an object for contacts. The ActiveResource object will be something similar to

> \#&lt;Store:0xb4aaec4 <span class="citation" data-cites="attributes">@attributes</span>={ “store” =&gt; { “description” =&gt; “some description”, “contacts” =&gt; \#&lt;Store::Contact:0xb4aa884 <span class="citation" data-cites="attributes">@attributes</span>={ “contact” =&gt; {“opening\_time” =&gt; “09:00”, “clo sing\_time” =&gt;“18:00”,“holidays”=&gt;\[“Sunday”\], “message” =&gt;"" } },<span class="citation" data-cites="prefix_options">@prefix\_options</span>={}, <span class="citation" data-cites="persisted">@persisted</span>=false&gt;, “name”=&gt; “some store” } } , <span class="citation" data-cites="prefix_options">@prefix\_options</span>={}, <span class="citation" data-cites="persisted">@persisted</span>=false&gt;

So I hope you have noticed that contacts is an object of `Store::Contact`. This is pretty handy anyway but the main issue was `contacts` attributes are are enclosed inside a root element `contact`. This is not an issue if you are just finding and displaying data. But its a real issue when you try to create or update.

If we continue the same structure and use `Store.create` it will create the record like

{% highlight js %} { store: { name: ‘some store’, description: ‘some description’, contacts: { contacts: { phone: ‘0495-2414123’, email: ‘test@somestore.com’, mobile: ‘99950123456’ } } } } {% endhighlight %}

Since we are using MongoDB to store data, the whole store and contact is a single document, the un-nessassory nesting for contacts was the real problem for us. So we thought of diveing into ActiveResource source code to get a solution. Atlast we had two ways to solve this issue.

1.  Create a model for `Store::Contact` with `self.include_root_in_json = false`
2.  Monkey patch `ActiveResource::Base.create_resource_for` method

1. Create a model
=================

This will work out perfectly only if you have one or two situations like `Store::Contact` or else you need to create a model for every attributes holding a hash value.

It will be better to create the model in the parent model file itself so that it will load the class when ever the parent model loads.

{% highlight ruby %}

app/model/store.rb
==================

class Store::Contact &lt; ActiveResource::Base self.include\_root\_in\_json = false

end {% endhighlight %}

Now when ever the we call `Store.create` ActiveResource strip the extra nesting of contacts.

2. Monkey patch ActiveResource
==============================

If you are new to monkey patching, you can take a look to my another blog post which explains [how monkey patch in rails](/2012/12/ruby-check-whether-method-is-monkey-patched-or-not.html).

My patch for this problem look like,

{% highlight ruby %}

config/initializers/active\_resource\_base\_patch.rb
====================================================

module ActiveResource class Base

    def create_resource_for(resource_name)
      resource = self.class.const_set(resource_name,
        Class.new(ActiveResource::Base))
      resource.prefix = self.class.prefix
      resource.site   = self.class.site
      resource.include_root_in_json = false
      resource
    end

end end {% endhighlight %}

This will work perfectly if you want all your sub models to strip the root element.

Since we had a lot of attributes holding hash value in different models we planned to move with the second option and so far it works pretty fine.
