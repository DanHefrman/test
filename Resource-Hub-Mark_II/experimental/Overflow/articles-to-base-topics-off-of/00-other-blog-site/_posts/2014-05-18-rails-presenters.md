Recently I noticed that my view templates are becoming more complicated as there are so many complex conditions in it. As per the design patterns the view should not contain any logic, So I needed some way to make my templates clean. Thats how I came to know about **Presenters**.

Presenters is a abstraction layer between the template and the controller. It encapsulates the complex conditions in the view template to the presenter class, which will make our view more clean, readable and testable.

Consider this as my view template before using presenters,

      <!-- app/views/users/show.html.erb -->
      <dt>Website:</dt>
      <dd>
      <% if @user.website.present? %>
        <%= link_to @user.website, @user.website %>
      <% else %>
        <span class="none">None given</span>
      <% end %>
      </dd>
      <dt>Twitter:</dt>
      <dd>
      <% if @user.twitter_handle.present? %>
        <%= link_to @user.twitter_handle, "http://twitter.com/#{@user.twitter_handle}" %>
      <% else %>
        <span class="none">None given</span>
      <% end %>
      </dd>

This is a design smell. We are writing the conditionals in the template. How we can avoid this using presenters?

Using Presenters
================

Create a new folder named `presenters` in the `app` directory. Then create a `UserPresenter` class inside it.

    # app/presenters/user_presenter.rb
    class UserPresenter
      def initialize

      end
    end

Now to use this, the easiest but **ugly way** is to let the controller know about the presenter.

    # app/controllers/user_controller.rb
    class UserController < ApplicationController
      def show
        user = User.find(params[:id])
        @user = UserPresenter.new(user, view_context)
      end
    end

Passing the `view_context` to presenter help us to use the helper methods inside the presenter.

Now the updated `UserPresenter` will look like,

    # app/presenters/user_presenter.rb
    class UserPresenter
      def initialize user, template
        @user = user
        @template = template
      end
    end

Now move the logic for the twitter and website into the presenter.

    # app/presenters/user_presenter.rb
    class UserPresenter
      def initialize user, template
        @user = user
        @template = template
      end

      def website
        if @user.website.present?
          @template.link_to @user.website, @user.website
        else
          @template.content_tag :span, 'None Given', class:'none'
        end
      end

      def twitter
        if @user.twitter_handle.present?
          @template.link_to @user.twitter_handle, "http://twitter.com/#{@user.twitter_handle}"
        else
          @template.content_tag :span, 'None Given', class:'none'
        end
      end
    end

So Now look into our view template

      <!-- app/views/users/show.html.erb -->
      <dt>Website:</dt>
      <dd><% @user.website %></dd>
      <dt>Twitter:</dt>
      <dd><% @user.twitter %></dd>

Does it look much better than what we had before? I know, Yes!

But using `@template` to call all the helper method is not fine, so we need to refactor it by adding a method missing.

    # app/presenters/user_presenter.rb
    class UserPresenter
      def initialize user, template
        @user = user
        @template = template
      end

      def website
        if @user.website.present?
          link_to @user.website, @user.website
        else
          content_tag :span, 'None Given', class:'none'
        end
      end

      def twitter
        if @user.twitter_handle.present?
          link_to @user.twitter_handle, "http://twitter.com/#{@user.twitter_handle}"
        else
          content_tag :span, 'None Given', class:'none'
        end
      end

      private
        def method_missing(*args, &block)
          @template.send(*args, &block);
        end
    end

Even better Ah!!. Try out and lemme know how you felt about presenters.
