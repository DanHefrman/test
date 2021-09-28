<span style="font-size: large;">If you need to write tests with rspec for a rails app you need to use and setup “rspec-rails” gem. Rails is equipped with Test::Unit framework as it’s default testing framework. We need to change the default test framework to rspec, so that we can use rails generator for generating tests. </span>  
<span style="font-size: large;">  
</span>  
<span style="font-size: large;">**You can start with skipping Test::Unit files while creating a new app.**</span>

<span style="font-size: large;">**Now add “rspec-rails” to the Gemfile.**</span>

<span style="font-size: large;">**Then bundle install**</span>

<span style="font-size: large;">**Now register the rspec as the testing framework replacing Test::Unit.**</span>

<span style="font-size: large;"> Hooray, you have done it. Now you can generate models, controllers and corresponding rspec test skeletons with the rails generator. </span>
