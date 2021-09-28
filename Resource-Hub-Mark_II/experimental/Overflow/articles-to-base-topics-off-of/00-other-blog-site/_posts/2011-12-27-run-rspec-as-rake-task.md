  

This is the first time I tried to run my Rspec tests as a rake task. I found this way after lots of googling since it's most results point to outdated information. I tried this with **rspec-2.7.0** gem.  Here I assume that you already wrote the rspec tests, now you just need to know how to run those tests as rake tasks.

  

Here we go.

1.  Create a Rakefile
2.  Copy and paste the code below.
3.  Use** task :default  =&gt; :spec** only if you want to run rspec rask as the default task.
4.  execute the **rake** command. (rake/bundle exec rake)

  
  

$
