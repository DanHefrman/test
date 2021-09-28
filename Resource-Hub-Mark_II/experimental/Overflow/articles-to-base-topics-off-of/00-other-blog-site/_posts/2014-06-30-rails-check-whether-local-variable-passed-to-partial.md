When we reuse the partial, there will be requirement to check whether the local variable in partial exists or not. We always introduce some variable for a race condition, which is needed to pass from one `render` location of many. Passing the default value for that variable in all the location you render the partial is tedious and error-prone.

Instead of this, checking whether the variable passed to the partial will work great and easy. But the catch is, you can’t use [defined?](http://ruby-doc.com/docs/ProgrammingRuby/html/tut_expressions.html#UG) opertator to do this. The [ActionView documentation](http://api.rubyonrails.org/classes/ActionView/Base.html#class-ActionView::Base-label-Passing+local+variables+to+sub+templates) says its an implementation restriction.

So here is the way you can check whether the variable is available. Use `local_assigns` Hash.

    <% if local_assigns.has_key? :name %>
      <p><%= name %></p>
    <% end %>

The `local_assigns` Hash contains all the locals you passed to the partial
