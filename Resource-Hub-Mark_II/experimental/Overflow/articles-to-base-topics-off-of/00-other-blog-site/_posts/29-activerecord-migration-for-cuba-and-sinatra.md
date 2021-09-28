[![](http://2.bp.blogspot.com/-FNAYC_NgaDc/UQeOcMTMbrI/AAAAAAAALOQ/bKCITp9Ye0E/s1600/sinatra.png)](http://2.bp.blogspot.com/-FNAYC_NgaDc/UQeOcMTMbrI/AAAAAAAALOQ/bKCITp9Ye0E/s1600/sinatra.png)

  

Rails like highly featured frameworks are already packed with the rake tasks for database migrations. But recently when I was playing with [cuba](http://cuba.is/), a micro [framework](https://github.com/soveran/cuba) for ruby, I really wanted to setup migrations so that I can handle database changes in production without hassle. The migration tasks are not bundle with cuba, so I wrote two tasks to handle database creation and database migration. Here is my Rakefile looks like

    require 'active_record'
     
    task(:environment) do
      env = ENV["RACK_ENV"] ? ENV["RACK_ENV"] : "development"
      ActiveRecord::Base.establish_connection(YAML::load_file('config.yml')['database'][env])
    end
     
    namespace :db do
      task(:create => :environment) do
        env = ENV["RACK_ENV"] ? ENV["RACK_ENV"] : "development"
        config = YAML::load_file('config.yml')['database'][env]
        ActiveRecord::Base.establish_connection(config.merge('database' => nil))
        ActiveRecord::Base.connection.create_database config['database']
      end
     
      task(:migrate => :environment) do
        ActiveRecord::Migrator.migrate('db/migrate', ENV['VERSION'] ? ENV['VERSION'].to_i : nil)
      end
    end

So now I can keep my ActiveRecord migration in the folder db/migrate and use the rake commands to execute it. I can create the db using the command

    rake db:create

Then migrate using the command

    rake db:migrate

You can use **<span style="background-color: white; color: #dd1144; font-family: Consolas; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">RACK\_ENV</span>**<span style="font-family: Arial;"><span style="font-size: 15px; white-space: pre-wrap;"> to specify the environment and </span></span>**<span style="background-color: white; color: #dd1144; font-family: Consolas; font-size: 15px; font-weight: bold; vertical-align: baseline; white-space: pre-wrap;">VERSION</span>** to specify version to which you want to migrate Eg :

    rake db:create RACK_ENV=production
            rake db:migrate VERSION=10

  
This can be used in both cuba and [sinatra](http://www.sinatrarb.com/).

$
