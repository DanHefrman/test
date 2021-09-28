<span style="font-family: Consolas;"><span style="font-size: 15px;">Some days before when I am writing an application without using ActiveRecord and writing its tests with Rspec, I ran into an error </span></span><span style="background-color: white; font-size: 15px;"><span style="font-family: Consolas;">**“undefined method \`fixture\_path=\`”** when I executes the spec. If you are facing this issue here is how you can fix this error.</span></span>

<span style="background-color: white; font-size: 15px;"><span style="font-family: Consolas;">  
</span></span>

<span style="background-color: white;"><span style="font-family: Consolas;"><span style="font-size: 15px;">I have created this application with **-O option for rails** command so that it won’t use ActiveRecord. I think  **rspec-rails** is not enough intelligent to know this. When I **[setup the rspec-rails for Rails 3](http://blog.revathskumar.com/2012/07/set-up-rspec-for-rails-app.html) **it generates a **spec/spec\_helper.rb** with ActiveRecord configurations.</span></span></span>

<span style="background-color: white; font-family: Consolas; font-size: 15px; white-space: pre-wrap;">  
</span>

<span style="background-color: white; font-family: Consolas; font-size: 15px; white-space: pre-wrap;">To fix it you need to comment out two lines from **spec/spec\_helper.rb.** In the the gist below 2nd and 7th are the lines to comment.</span>

<span style="background-color: white; font-family: Consolas; font-size: 15px; white-space: pre-wrap;">  
</span>

<span style="font-size: 15px; white-space: pre-wrap;">You can also assign **false** to ***config.use\_transactional\_fixtures*** instead of commenting. So now your **spec/spec\_helper.rb** will look like this.</span>

<span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;">  
</span></span>

<span style="background-color: white; font-family: Consolas; font-size: 15px; white-space: pre-wrap;">Hope it worked for you.</span>

<span style="background-color: white; font-family: Consolas; font-size: 15px; white-space: pre-wrap;">Happy coding.</span>

$
