[![](http://3.bp.blogspot.com/--wFgBPcGyrs/UOxxoEpyd9I/AAAAAAAALL4/ZfiIgLaJM9c/s1600/rails3.gif)](http://3.bp.blogspot.com/--wFgBPcGyrs/UOxxoEpyd9I/AAAAAAAALL4/ZfiIgLaJM9c/s1600/rails3.gif)

<span style="text-align: left;">  
</span>

<span style="text-align: left;">Handling exception in Rails 3.x is entirely different from Rails 2.x. In Rails 3.x, whole exception handling is moved to rack middleware stack. So we can't catch 404 and 500 exception from ApplicationContoller with </span>**rescue\_from** <span style="text-align: left;">method.</span>

  
Here is the simple way to handle 404 exceptions so that you can show custom page for them.  
  
For that first we need to route the exception app to our own routes. Adding the following line of code to **application.rb** will do the trick.  

    config.exceptions_app = self.routes

Now all the exceptions will be routes to our routes. Next we need to add routes to handle those.  

    match "/404", :to => "errors#not_found"

Now our route is ready. Please make sure that you use "**match**" for the route matching since we are expecting exception from every single http requests such as get/post/put/delete. Next thing is just a controller, action and view for the route.  
  
**Errors Controller**  
  

    class ErrorsController < ApplicationController  def not_found    respond_to do |format|      format.html    end  endend

**Not found view**  
  

    <section class="section-wrapper not-found-w">  <div class="container">    <div class="row">      <div class="span4">        <%= image_tag "not-found-error.png", alt: 'Not-found-error'%>      </div>      <div class="span8">        <h1>Page not found</h1>        <h4>Sorry the page you requested may have been moved or deleted.</h4>        <p>Let's try one of the following remedies to get you back on track...</p>        <div class="not-found-solutions btn-group">          <%= link_to raw('<i class="icon-circle-arrow-left"></i> Revisit the previous page'), "#", class: "btn", onclick: "javascript:window.history.back();return false;" %>          <%= link_to raw('<i class="icon-home"></i> Go to the homepage'), root_path, class: "btn" %>        </div>    </div>  </div></div></section>

Thats it. You have done. Now try to invoke a 404, you can view your custom 404 page.  
Hope it helped you.  
Happy coding. ;)  
  
Photo Credit : [123rf.com](http://www.123rf.com/photo_10724496_3d-render-illustration-error-404-page-not-found-yellow-background--black-gray-3d-board-with-word-err.html)

$
