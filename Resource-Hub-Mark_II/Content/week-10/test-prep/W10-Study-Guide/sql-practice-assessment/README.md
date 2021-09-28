In this assessment, you will create:

-   A database user with a password
-   A database owned by that user
-   Some tables

Then, you will write a SQL file that will insert data into the tables.

Then, you will write a SQL file that contains a SQL statement that joins the tables together.

There’s an image in the “images” directory that shows the picture of the data model.

There are mocha tests that determine if it can connect to the database with the specified user name, password, and database name. Then, it checks the tables to make sure that they have the structure specified.

Get Started
===========

-   Run `npm install`.
-   Run the tests with “npm test”.

Step 1
======

Create a database user named “merchant\_app” with the password “bhKx5P6V”. There is no file for this. Just do it for your local installation of PostgreSQL. The tests assume that it exists.

Step 2
======

Create a database named “merchant\_development” with the owner “merchant\_app”. There is no file for this. Just do it for your local installation of PostgreSQL. The tests assume that it exists.

Step 3
======

Create the following tables in the database. Write the CREATE TABLE statements in the files that match the table name. For example, in the “create-users-table.sql”, write the CREATE TABLE statement for the “users” table.

The tests will drop all of the tables run the table creation for you automatically.

Do these in order.

The “PK, NOT NULL” specification means it should be a primary key. The “FK” specification means it should be a foreign key. All columns will be “NOT NULL”.

-   The “users” table | Column name | Column type | Constraints | |————-|————–|————–| | id | SERIAL | PK, NOT NULL | | full\_name | VARCHAR(255) | NOT NULL | | created\_at | TIMESTAMP | NOT NULL |

-   The “merchant\_types” table

<table><thead><tr class="header"><th>Column name</th><th>Column type</th><th>Constraints</th></tr></thead><tbody><tr class="odd"><td>id</td><td>SERIAL</td><td>PK, NOT NULL</td></tr><tr class="even"><td>type</td><td>VARCHAR(20)</td><td>NOT NULL</td></tr></tbody></table>

-   The “countries” table

<table><thead><tr class="header"><th>Column name</th><th>Column type</th><th>Constraints</th></tr></thead><tbody><tr class="odd"><td>id</td><td>SERIAL</td><td>PK, NOT NULL</td></tr><tr class="even"><td>name</td><td>VARCHAR(100)</td><td>NOT NULL</td></tr><tr class="odd"><td>continent_name</td><td>VARCHAR(20)</td><td>NOT NULL</td></tr></tbody></table>

-   The “merchants” table

<table><thead><tr class="header"><th>Column name</th><th>Column type</th><th>Constraints</th></tr></thead><tbody><tr class="odd"><td>id</td><td>SERIAL</td><td>PK, NOT NULL</td></tr><tr class="even"><td>merchant_name</td><td>VARCHAR(255)</td><td>NOT NULL</td></tr><tr class="odd"><td>country_id</td><td>INTEGER</td><td>FK, NOT NULL</td></tr><tr class="even"><td>created_at</td><td>TIMESTAMP</td><td>NOT NULL</td></tr><tr class="odd"><td>admin_id</td><td>INTEGER</td><td>FK (to users id), NOT NULL</td></tr><tr class="even"><td>merchant_type_id</td><td>INTEGER</td><td>FK, NOT NULL</td></tr></tbody></table>

You can run just the table tests to make sure your CREATEs are correct.

npm test – -g “when created”

Step 4
======

Create INSERT statements for the four tables in each of the four files provided for you. Here is the data that you should include. Don’t insert more data than what is here. Otherwise, the tests in the next section will fail.

-   The “users” table

This is not going to be tested. The SQL that you write will. You’ll need this data for your SQL statements to work correctly.

<table><thead><tr class="header"><th>full_name</th><th>created_at</th></tr></thead><tbody><tr class="odd"><td>‘Zaphod Beeblebrox’</td><td>CURRENT_TIMESTAMP</td></tr><tr class="even"><td>‘Blart Versenwald III’ **</td><td>CURRENT_TIMESTAMP</td></tr></tbody></table>

\*\*

-   The “merchant\_types” table

<table><thead><tr class="header"><th>type</th></tr></thead><tbody><tr class="odd"><td>‘Retail’</td></tr><tr class="even"><td>‘Wholesale’</td></tr></tbody></table>

-   The “countries” table

<table><thead><tr class="header"><th>name</th><th>continent_name</th></tr></thead><tbody><tr class="odd"><td>‘Brazil’</td><td>‘South America’</td></tr><tr class="even"><td>‘China’</td><td>‘Asia’</td></tr><tr class="odd"><td>‘USA’</td><td>‘North America’</td></tr></tbody></table>

-   The “merchants” table

In this section, the foreign keys are not specified by numbers. They show, in parentheses, the unique value from a row in the seed data, above. Depending on how you insert them, they may have different ids. Figure out what the id will be for it and put that in your SQL INSERT statement for “merchants”.

For example, if you insert “Brazil” first in your insert-countries-data.sql file, then you will use 1 as the country\_id for (Brazil) below.

The tests will drop and recreate the tables on each test, so the values should be stable.

<table><thead><tr class="header"><th>merchant_name</th><th>country_id</th><th>created_at</th><th>admin_id</th><th>merchant_type_id</th></tr></thead><tbody><tr class="odd"><td>‘Zingo’</td><td>(Brazil)</td><td>CURRENT_TIMESTAMP</td><td>(Zaphod)</td><td>(Retail)</td></tr><tr class="even"><td>‘Widgets International’</td><td>(China)</td><td>CURRENT_TIMESTAMP</td><td>(Blart)</td><td>(Wholesale)</td></tr><tr class="odd"><td>‘Snglrify’</td><td>(USA)</td><td>CURRENT_TIMESTAMP</td><td>(Zaphod)</td><td>(Retail)</td></tr><tr class="even"><td>‘Better Products 4 U’</td><td>(USA)</td><td>CURRENT_TIMESTAMP</td><td>(Zaphod)</td><td>(Wholesale)</td></tr></tbody></table>

-   Step 5

Write a SQL statement in joined-data-query.sql that returns the following data by JOINing the tables:

-   users.full\_name
-   merchant\_types.type
-   countries.name
-   merchants.merchant\_name

Order the records on the merchant\_name column.

The result should look like this.

<table><thead><tr class="header"><th>full_name</th><th>type</th><th>name</th><th>merchant_name</th></tr></thead><tbody><tr class="odd"><td>Zaphod Beeblebrox</td><td>Wholesale</td><td>USA</td><td>Better Products 4 U</td></tr><tr class="even"><td>Zaphod Beeblebrox</td><td>Retail</td><td>USA</td><td>Snglrify</td></tr><tr class="odd"><td>Blart Versenwald III</td><td>Wholesale</td><td>China</td><td>Widgets International</td></tr><tr class="even"><td>Zaphod Beeblebrox</td><td>Retail</td><td>Brazil</td><td>Zingo</td></tr></tbody></table>
