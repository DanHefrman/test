According to me the easiest way to create a user in mysql and set privilege to some database is the grant statement.  You can do both the tasks ie., creating a user and setting privileges by executing a single statement. Here is the syntax for the statement.

**1. Privilage**  
You can specify what privilage should be given to the user on this database. like SELECT,CREATE. etc. Either you can use one privilege or more than one privilege on a single statement.

if you want to give all the privilages to the user then the short cut is

**2. Database**  
Datebase name to which you need to give privilege to the user. If the user want privilege to all databases use “\*”.

**3. Tablename**  
If you want to set a particular privilege to a database table you can provide a table name else just provide \* (astrik) which means to all tables in a given database.

**4. username**  
Desired username for the new user.Must me unique.

**5.ip**  
If you like to restrict the user from using database from a particular ip then you can provide the allowed ip or just provide localhost there so that user can’t use remote login to the database.giving ‘%’ in the place indicated localhost.

**6. password**  
Desired password for the new user.

**Eg:**

After creating user and setting privilage don’t forget to **reload the privileges** using
