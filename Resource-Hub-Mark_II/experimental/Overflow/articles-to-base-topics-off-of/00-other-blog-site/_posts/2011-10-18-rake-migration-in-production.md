        By default rake will run the migrations in development environment. So when we try to run migration on the production server it will throw error, since the database credentials for production and development environment is different. In order to run migration on production server, we need to manually ask the rake to use the database credentials of production environment. Here is how we will force rake to use production environment.  
  

  
Hope it helped you.:)

$
