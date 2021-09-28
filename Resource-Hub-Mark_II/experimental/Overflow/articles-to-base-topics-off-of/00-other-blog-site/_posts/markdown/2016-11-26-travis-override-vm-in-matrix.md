&lt;!DOCTYPE html&gt;

Recently in an effort to separate the frontend test and backend test on travis, we came to know about the travis feature called [matrix](https://docs.travis-ci.com/user/customizing-the-build/#Build-Matrix), Which helps us to define parallel jobs in the build.

Our initial idea was to define separate `ENV` varaibles using matrix and conditionally run the scripts. Our `.travis.yml` file looked like below one.

{% highlight yaml %}
--------------------

sudo: required dist: trusty

language: ruby

rvm: - 2.1.2

before\_install: - sudo apt-get update -qq - sudo apt-get install -qq mysql-server mysql-client unzip - nvm install v5.5

before\_script: - mysql -u root -e ‘create database app\_test;’ - cp config/database.travis.yml config/database.yml - bundle exec rake db:test:load app:generate\_secret\_token - npm install

branches: only: - master

cache: bundler: true

env: global: - RAILS\_ENV=test matrix: - TEST\_CATEGORY=frontend - TEST\_CATEGORY=backend

matrix: fast\_finish: true

script: - if \[ $TEST\_CATEGORY == ‘frontend’ \]; then npm test; fi - if \[ $TEST\_CATEGORY == ‘backend’ \]; then bundle exec parallel\_rspec -n 2 spec; fi {% endhighlight %}

We were able to run jobs in parallel, but still they boot up same vm and configure everything in both VM.

![Travis Matrix Version 1](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2016/11/8a502f9f-8a60-48f3-ae01-d56f2d456247_zpsi1okhajk.png)

Since for our frontend spec doesn’t need any ruby related stuff we started looking for more ways to override the vm’s used for the jobs. And suddenly [this comment](https://github.com/travis-ci/travis-ci/issues/2646#issuecomment-77361650) caught our eye.

As per the comment there are ways to override vm in matrix but seems like they experimental since there is no documentation was found on it. Also [travis lint](http://lint.travis-ci.org/) will throw linting error. But anyway thought of give a try and updated my travis config to the below one.

{% highlight yaml %}
--------------------

sudo: required dist: trusty

branches: only: - master

matrix: fast\_finish: true include: - node\_js: 5.5 language: node\_js env: NODE\_ENV=test cache: directories: - “<span class="math inline">$HOME/.nvm" - "$</span>HOME/.npm” before\_install: - nvm install v5.5 install: - npm install script: - npm test - rvm: 2.1.2 language: ruby env: RAILS\_ENV=test cache: bundler: true before\_install: - sudo apt-get update -qq - sudo apt-get install -qq mysql-server mysql-client unzip before\_script: - mysql -u root -e ‘create database app\_test;’ - cp config/database.travis.yml config/database.yml - bundle exec rake db:test:load app:generate\_secret\_token script: - bundle exec parallel\_rspec spec {% endhighlight %}

Now for frontend spec we dont need to setup anything related to ruby.

Travis Version 2

Now the frontend job uses **node\_js** vm where as backend job uses **ruby** vm. Also our frontend job finished with in 3 minutes which is 5 minutes gain from previous version since we removed all the ruby and rails setup for this job.

Even though now we have multiple jobs, github integration will show only build status not per job status.

**Disclaimer : The above feature is undocumented by travis and may change in future.**
