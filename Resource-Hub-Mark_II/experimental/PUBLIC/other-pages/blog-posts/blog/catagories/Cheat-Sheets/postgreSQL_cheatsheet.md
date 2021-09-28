===========================

PostgreSQL commands
-------------------

===========================

Access the PostgreSQL server from **psql** with a specific user: `psql -U [username];`

Connect to a specific database: `\c database_name;`

To quit the psql: `\q`

<a href="https://www.postgresqltutorial.com/postgresql-show-databases/" class="btn">List all databases</a> in the PostgreSQL database server `\l`

List all schemas: `\dn`

List all <a href="https://www.postgresqltutorial.com/postgresql-stored-procedures/" class="btn">stored procedures</a> and functions: `\df`

List all <a href="https://www.postgresqltutorial.com/postgresql-views/" class="btn">views</a>: `\dv`

<a href="https://www.postgresqltutorial.com/postgresql-show-tables/" class="btn">Lists all tables</a> in a current database. `\dt`

Or to get more information on tables in the current database: `\dt+`

Get detailed information on a table. `\d+ table_name`

Show query output in the pretty-format: `\x`

List all users: `\du`

Create a new <a href="https://www.postgresqltutorial.com/postgresql-roles/" class="btn">role</a>:

     CREATE ROLE role_name;

Create a new role with a `username` and `password`:

     CREATE ROLE username NOINHERIT LOGIN PASSWORD password;

Change role for the current session to the `new_role`:

     SET ROLE new_role;

Allow `role_1` to set its role as `role_2:`

     GRANT role_2 TO role_1;

===========================

Managing databases
------------------

===========================  
<a href="https://www.postgresqltutorial.com/postgresql-create-database/" class="btn">Create a new database</a>:

     CREATE DATABASE [IF NOT EXISTS] db_name;

<a href="https://www.postgresqltutorial.com/postgresql-drop-database/" class="btn">Delete a database permanently</a>:

     DROP DATABASE [IF EXISTS] db_name;

===========================

Managing tables
---------------

===========================  
<a href="https://www.postgresqltutorial.com/postgresql-create-table/" class="btn">Create a new table</a> or a <a href="https://www.postgresqltutorial.com/postgresql-temporary-table/" class="btn">temporary table</a>

     CREATE [TEMP] TABLE [IF NOT EXISTS] table_name(
           pk SERIAL PRIMARY KEY,
       c1 type(size) NOT NULL,
       c2 type(size) NULL,
       ...
    );

<a href="https://www.postgresqltutorial.com/postgresql-add-column/" class="btn">Add a new column</a> to a table:

     ALTER TABLE table_name ADD COLUMN new_column_name TYPE;

<a href="https://www.postgresqltutorial.com/postgresql-drop-column/" class="btn">Drop a column</a> in a table:

     ALTER TABLE table_name DROP COLUMN column_name;

<a href="https://www.postgresqltutorial.com/postgresql-rename-column/" class="btn">Rename a column</a>:

     ALTER TABLE table_name RENAME column_name TO new_column_name;

Set or remove a default value for a column:

     ALTER TABLE table_name ALTER COLUMN [SET DEFAULT value | DROP DEFAULT]

Add a <a href="https://www.postgresqltutorial.com/postgresql-primary-key/" class="btn">primary key</a> to a table.

     ALTER TABLE table_name ADD PRIMARY KEY (column,...);

Remove the primary key from a table.

     ALTER TABLE table_name
    DROP CONSTRAINT primary_key_constraint_name;

<a href="https://www.postgresqltutorial.com/postgresql-rename-table/" class="btn">Rename a table</a>.

     ALTER TABLE table_name RENAME TO new_table_name;

<a href="https://www.postgresqltutorial.com/postgresql-drop-table/" class="btn">Drop a table</a> and its dependent objects:

     DROP TABLE [IF EXISTS] table_name CASCADE;

===========================

Managing views
--------------

===========================  
<a href="https://www.postgresqltutorial.com/managing-postgresql-views/" class="btn">Create a view</a>:

     CREATE OR REPLACE view_name AS
    query;

<a href="https://www.postgresqltutorial.com/postgresql-recursive-view/" class="btn">Create a recursive view</a>:

     CREATE RECURSIVE VIEW view_name(column_list) AS
    SELECT column_list;

<a href="https://www.postgresqltutorial.com/postgresql-materialized-views/" class="btn">Create a materialized view</a>:

     CREATE MATERIALIZED VIEW view_name
    AS
    query
    WITH [NO] DATA;

Refresh a materialized view:

     REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;

Drop a view:

     DROP VIEW [ IF EXISTS ] view_name;

Drop a materialized view:

     DROP MATERIALIZED VIEW view_name;

Rename a view:

     ALTER VIEW view_name RENAME TO new_name;

===========================

Managing indexes
----------------

===========================  
Creating an index with the specified name on a table

     CREATE [UNIQUE] INDEX index_name
    ON table (column,...)

Removing a specified index from a table

     DROP INDEX index_name;

===========================

Querying data from tables
-------------------------

===========================  
Query all data from a table:

     SELECT * FROM table_name;

Query data from specified columns of all rows in a table:

     SELECT column_list
    FROM table;

Query data and select only unique rows:

     SELECT DISTINCT (column)
    FROM table;

Query data from a table with a filter:

     SELECT *
    FROM table
    WHERE condition;

Assign an <a href="https://www.postgresqltutorial.com/postgresql-alias/" class="btn">alias</a> to a column in the result set:

     SELECT column_1 AS new_column_1, ...
    FROM table;

Query data using the `LIKE` operator:

     SELECT * FROM table_name
    WHERE column LIKE '%value%'

Query data using the `BETWEEN `operator:

     SELECT * FROM table_name
    WHERE column BETWEEN low AND high;

Query data using the `IN `operator:

     SELECT * FROM table_name
    WHERE column IN (value1, value2,...);

Constrain the returned rows with the `LIMIT` clause:

     SELECT * FROM table_name
    LIMIT limit OFFSET offset
    ORDER BY column_name;

Query data from multiple using the <a href="https://www.postgresqltutorial.com/postgresql-inner-join/" class="btn">inner join</a>, <a href="https://www.postgresqltutorial.com/postgresql-left-join/" class="btn">left join</a>, <a href="https://www.postgresqltutorial.com/postgresql-full-outer-join/" class="btn">full outer join</a>, <a href="https://www.postgresqltutorial.com/postgresql-cross-join/" class="btn">cross join</a> and <a href="https://www.postgresqltutorial.com/postgresql-natural-join/" class="btn">natural join</a>:

     SELECT *
    FROM table1
    INNER JOIN table2 ON conditions
    SELECT *
    FROM table1
    LEFT JOIN table2 ON conditions
    SELECT *
    FROM table1
    FULL OUTER JOIN table2 ON conditions
    SELECT *
    FROM table1
    CROSS JOIN table2;
    SELECT *
    FROM table1
    NATURAL JOIN table2;

Return the number of rows of a table.

     SELECT COUNT (*)
    FROM table_name;

Sort rows in ascending or descending order:

     SELECT select_list
    FROM table
    ORDER BY column ASC [DESC], column2 ASC [DESC],...;

Group rows using `GROUP BY` clause.

     SELECT *
    FROM table
    GROUP BY column_1, column_2, ...;

Filter groups using the `HAVING` clause.

     SELECT *
    FROM table
    GROUP BY column_1
    HAVING condition;

===========================

Set operations
--------------

===========================  
Combine the result set of two or more queries with `UNION` operator:

     SELECT * FROM table1
    UNION
    SELECT * FROM table2;

Minus a result set using `EXCEPT` operator:

     SELECT * FROM table1
    EXCEPT
    SELECT * FROM table2;

Get intersection of the result sets of two queries:

     SELECT * FROM table1
    INTERSECT
    SELECT * FROM table2;

===========================

Modifying data
--------------

===========================  
<a href="https://www.postgresqltutorial.com/postgresql-insert/" class="btn">Insert a new row into a table</a>:

     INSERT INTO table(column1,column2,...)
    VALUES(value_1,value_2,...);

Insert multiple rows into a table:

     INSERT INTO table_name(column1,column2,...)
    VALUES(value_1,value_2,...),
          (value_1,value_2,...),
          (value_1,value_2,...)...

<a href="https://www.postgresqltutorial.com/postgresql-update/" class="btn">Update</a> data for all rows:

     UPDATE table_name
    SET column_1 = value_1,
        ...;

Update data for a set of rows specified by a condition in the `WHERE` clause.

     UPDATE table
    SET column_1 = value_1,
        ...
    WHERE condition;

<a href="https://www.postgresqltutorial.com/postgresql-delete/" class="btn">Delete all rows</a> of a table:

     DELETE FROM table_name;

Delete specific rows based on a condition:

     DELETE FROM table_name
    WHERE condition;

Performance
-----------

Show the query plan for a query:

     EXPLAIN query;

Show and execute the query plan for a query:

     EXPLAIN ANALYZE query;

Collect statistics:

     ANALYZE table_name;

-   <a href="#postgresql-commands" class="btn">PostgreSQL commands</a>
-   <a href="#managing-databases" class="btn">Managing databases</a>
-   <a href="#managing-tables" class="btn">Managing tables</a>
-   <a href="#managing-views" class="btn">Managing views</a>
-   <a href="#managing-indexes" class="btn">Managing indexes</a>
-   <a href="#querying-data-from-tables" class="btn">Querying data from tables</a>
-   <a href="#set-operations" class="btn">Set operations</a>
-   <a href="#modifying-data" class="btn">Modifying data</a>
-   <a href="#performance" class="btn">Performance</a>

<span id="sidebar-toc-btn">≡</span>
