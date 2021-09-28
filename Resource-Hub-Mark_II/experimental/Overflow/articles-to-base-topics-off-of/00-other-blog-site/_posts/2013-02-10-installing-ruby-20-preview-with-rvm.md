  

On [Feb 8th 2013](http://www.ruby-lang.org/en/news/2013/02/08/ruby-2-0-0-rc2-is-released/) ruby 2.0 rc2 released. This blog post will help you to install ruby2.0rc2 with rvm.  
  

[<img src="http://1.bp.blogspot.com/-jfklDzj5yaY/URexLhV1XYI/AAAAAAAAM5k/cSY9S0qCQCo/s400/ruby2.0rc2.png" width="400" height="116" />](http://1.bp.blogspot.com/-jfklDzj5yaY/URexLhV1XYI/AAAAAAAAM5k/cSY9S0qCQCo/s1600/ruby2.0rc2.png)

#### 

#### Update to latest rvm

    rvm get head

  

#### Install libyaml

Install libyaml-dev library if not installed.

    apt-get install libyaml-dev

  

#### Install package openssl

    rvm pkg install openssl

  

#### Install ruby

    rvm install "ruby-2.0.0-preview2" --with-openssl-dir=$rvm_path/usr --verify-downloads 1

You are ready to work with Ruby 2.0.  
Happy coding ;)

$
