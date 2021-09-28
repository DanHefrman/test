SQL
===

#### Structured Query Language

-   SQL is a *declarative* programming language that works on *sets* of records.
-   Primary way to interact with databases.
-   A **Relational Database Management System** is a software application used to store, modify, and retrieve data for programs.
-   A single running RDBMS can have hundreds of databases that it manages.

#### PostgreSQL

-   **PostgreSQL is an open-source RDBMS that allows for interactive querying.**

-   PostgreSQL can be interacted with directly from the command line using `psql` or from a GUI like **Postbird**

    ##### PostgreSQL Commands from the Terminal using `psql`

    <table><thead><tr class="header"><th>Command</th><th>Shortcut</th></tr></thead><tbody><tr class="odd"><td>Connect ot PostgreSQL database</td><td><code class="language-javascript">psql -d database -U user -W</code></td></tr><tr class="even"><td>Switch connection to a new database</td><td><code class="language-javascript">\c database</code></td></tr><tr class="odd"><td>List all databases</td><td><code class="language-javascript">\l</code></td></tr><tr class="even"><td>List all tables</td><td><code class="language-javascript">\dt</code></td></tr><tr class="odd"><td>Describe a table</td><td><code class="language-javascript">\d table</code></td></tr><tr class="even"><td>List all schemas</td><td><code class="language-javascript">\dn</code></td></tr><tr class="odd"><td>List available functions</td><td><code class="language-javascript">\df</code></td></tr><tr class="even"><td>List available views</td><td><code class="language-javascript">\dv</code></td></tr><tr class="odd"><td>List users and their roles</td><td><code class="language-javascript">\du</code></td></tr><tr class="even"><td>Execute the previous command</td><td><code class="language-javascript">SELECT version()</code> =&gt; <code class="language-javascript">\g</code></td></tr><tr class="odd"><td>Command History</td><td><code class="language-javascript">\s</code></td></tr><tr class="even"><td>Execute commands from a file</td><td><code class="language-javascript">\i file</code></td></tr><tr class="odd"><td>List available <code class="language-javascript">psql</code> commands</td><td><code class="language-javascript">\?</code></td></tr><tr class="even"><td>Quit <code class="language-javascript">psql</code></td><td><code class="language-javascript">\q</code></td></tr><tr class="odd"><td>Format output to HTML format</td><td><code class="language-javascript">\H</code></td></tr><tr class="even"><td>Format output to be aligned</td><td><code class="language-javascript">\a</code></td></tr></tbody></table>

------------------------------------------------------------------------

### SQL Commands

#### User Management

-   Usernames should not contain spaces or dashes
-   They should only contain lower case letters, numbers, and underscores.
    -   Good: `kristen_florey123`
    -   Bad: `kristen-florey.user`

##### Creating Users

     CREATE USER «name» WITH «option»;

-   define a new database role

-   A role is an entity that can own database objects and have database priveleges:

    -   a role can be considered a 'user', a 'group', or both.

-   same command as `CREATE ROLE`, but with `CREATE USER` login is assumed by default

-   **name**: the name of the new role

-   **options**:

<!-- -->

       SUPERUSER | NOSUPERUSER
      INHERIT | NOINHERIT
      LOGIN | NOLOGIN
      PASSWORD 'password' | PASSWORD NULL
      VALID UNTIL 'timestamp'
      IN ROLE role_name [, ...]
      IN GROUP role_name [, ...]

-   ###### <a href="https://www.postgresql.org/docs/13/sql-createrole.html" class="btn">Detailed List of Parameters</a>

##### Deleting Users

     DROP ROLE [IF EXISTS] «name»;

-   removes the specified role(s).
-   `IF EXISTS` will prevent error if role does not exist.
-   a role cannot be removed if it is still referenced in any database of the cluster; an error will be thrown.
-   Before dropping the role, you must drop all objects it owns (or reassign their ownership)
    -   see <a href="https://www.postgresql.org/docs/13/sql-drop-owned.html" class="btn"><code class="language-javascript">DROP OWNED</code></a> or <a href="https://www.postgresql.org/docs/13/sql-reassign-owned.html" class="btn"><code class="language-javascript">REASSIGN OWNED</code></a>

##### Setting Roles

     SET [SESSION | LOCAL] ROLE «role_name»

     RESET ROLE

-   sets the current user identifier to the current SQL session to be **«role\_name»**
    -   the specified **«role\_name»** must be a role that the current session user is a member of
-   `RESET ROLE` resets the current user identifier to be the current session user identifier.

<!-- -->

     ALTER ROLE [ CURRENT_USER | SESSION_USER ] WITH «option»;

    ALTER ROLE «name» RENAME TO «new_name»

-   see `CREATE USER` for options

------------------------------------------------------------------------

#### Database Management

##### Creating a Database

     CREATE DATABASE «name»;

-   Creates new PostgreSQL database
-   Must be superuser to create databases

**name**: the name of the database to be created  
**username**: the role name of the user who will own the new database or `DEFAULT` to use the default user  
**additional options**:

     CREATE DATABASE «name» WITH «options»:

      OWNER = «user_name
      TEMPLATE = «template»
      ENCODING = «encoding»
      LOCALE = «locale»
      LC_COLLATE = «lc_collate»
      LC_CTYPE = «lc_ctype»
      TABLESPACE = «tablespace_name»
      ALLOW_CONNECTIONS = «allowconn»
      CONNECTION LIMIT = «connlimit»
      IS_TEMPLATE = «istemplate»

##### Deleting a Database

     DROP DATABASE «name»;

-   removes the catalog entries for the database and deletes the directory containing the data
-   can only be executed by the database owner
-   cannot be executed while you are connected to the target database
-   drop forcefully and check if database exists:

<!-- -->

     DROP DATABASE IF EXISTS «name» WITH FORCE;

------------------------------------------------------------------------

#### Table Management

-   A table is a *logical* structure that consists of rows and columns and defines how data is stored and contained
-   **Columns:**
    -   the number and order of the columns is fixed, and
    -   each column has a name and a data type
        -   the data type limits the set of possible values
-   **Rows:**
    -   the number of rows is variable dependent on how much data is stored at a given moment.
    -   the order of rows is unspecified, unless sorted

##### Creating a Table

     CREATE TABLE «table name» (
      «column name» «data type»,
      «column name» «data type»,
      ...
      «column name» «data type»
    );

##### Altering Tables

-   ###### Adding a Column

         ALTER TABLE «name»
        ADD COLUMN «column_name» «data_type»;

-   ###### Removing a Column

         ALTER TABLE «name»
        DROP COLUMN «column_name»;

-   ###### Renaming a Column

         ALTER TABLE «name»
        RENAME COLUMN «column_name» TO «new_name»;

    ###### <a href="https://www.postgresql.org/docs/13/sql-altertable.html" class="btn">More ALTER TABLE Options</a>

##### Adding Rows (Values)

     INSERT INTO «name» («column1», «column2», ...)
    VALUES («value1», «value2», ...);

-   ###### Optional RETURNING Clause

         INSERT INTO «name» («column1», «column2», ...)
        VALUES («value1», «value2», ...)
        RETURNING «column1» | *;

    -   return information from the inserted row
        -   use an asterick to return the entire inserted row
    -   use the `AS` keyword to rename the returned value

------------------------------------------------------------------------

#### Queries

##### Select Query

     SELECT «column1», «column2»
    FROM «table»;

-   ###### Select all rows

         SELECT *
        FROM «table»;

##### WHERE clause

     SELECT «column»
    FROM «table»
    WHERE «column» = 'value';

-   ###### WHERE clause for a list of values

         SELECT «column»
        FROM «table»
        WHERE «column» IN ('value1', 'value2', 'value3');

-   ###### WHERE clause for a rangle of values

         SELECT «column»
        FROM «table»
        WHERE «column» BETWEEN «int» AND «int»;

##### ORDER BY

-   Specify the order in which data is returned (optionally add descending or ascending )

<!-- -->

     SELECT «column»
    FROM «table»
    ORDER BY «column» [ DESC | ASC ]

-   ###### LIMIT

    -   Limit the number of rows returned

    <!-- -->

         SELECT «column»
        FROM «table»
        ORDER BY «column»
        LIMIT «int»

-   ###### OFFSET

    -   Offset the rows returned by a specified amount

    <!-- -->

         SELECT «column»
        FROM «table»
        ORDER BY «column»
        LIMIT «int» OFFEST «int»;

------------------------------------------------------------------------

#### Constraints

-   Constraints allow control over data in tables
-   If a user attempts to store data in a column that would violate a constraint, an error is thrown

##### Check Constraints

-   allows you to specify that the value in a certain column **must satisfy a Boolean** expression

         CREATE TABLE «table» (
          «column» «datatype»,
          «column» «datatype» CHECK ( «conditional statement» )
        );

##### Not-Null Constraints

-   specifies that a column must not assume the null value

         CREATE TABLE «table» (
          «column» «datatype» NOT NULL,
          «column» «datatype» NOT NULL
        );

##### Unique Constraints

-   ensure that the data contained in a column, or a group of columns, is unique among all the rows in the table

         CREATE TABLE «table» (
          «column» «datatype» UNIQUE,
          «column» «datatype»
        );

##### Primary Keys

-   indicates that a column, or group of columns, can be used as a unique identifier for rows in the table
-   This requires that the values be both unique and not null

         CREATE TABLE «table» (
          «column» «datatype» PRIMARY KEY,
          «column» «datatype»
        );

-   Primary keys can span more than one column; the syntax is similar to unique constraints:

         CREATE TABLE «table» (
          «column1» «data type»,
          «column2» «data type»,
          PRIMARY KEY («column1», «column2»)
        );

##### Foreign Keys

-   A foreign key constraint specifies that the values in a column (or a group of columns) must match the values appearing in some row of another table.
-   We say this maintains the referential integrity between two related tables

         CREATE TABLE «table» (
          «column» «datatype» PRIMARY KEY,
          «column» «datatype» REFERENCES «table» («column»)
        );

------------------------------------------------------------------------

### SQL Data Types

Name

Aliases

Description

bigint

int8

signed eight-byte integer

bigserial

serial8

autoincrementing eight-byte integer

bit \[ (n) \]

fixed-length bit string

bit varying \[ (n) \]

varbit \[ (n) \]

variable-length bit string

boolean

bool

logical Boolean (true/false)

box

rectangular box on a plane

bytea

binary data (“byte array”)

character \[ (n) \]

char \[ (n) \]

fixed-length character string

character varying \[ (n) \]

varchar \[ (n) \]

variable-length character string

cidr

IPv4 or IPv6 network address

circle

circle on a plane

date

calendar date (year, month, day)

double precision

float8

double precision floating-point number (8 bytes)

inet

IPv4 or IPv6 host address

integer

int, int4

signed four-byte integer

interval \[ fields \] \[ (p) \]

time span

json

textual JSON data

jsonb

binary JSON data, decomposed

line

infinite line on a plane

lseg

line segment on a plane

macaddr

MAC (Media Access Control) address

macaddr8

MAC (Media Access Control) address (EUI-64 format)

money

currency amount

numeric \[ (p, s) \]

decimal \[ (p, s) \]

exact numeric of selectable precision

path

geometric path on a plane

pg\_lsn

PostgreSQL Log Sequence Number

pg\_snapshot

user-level transaction ID snapshot

point

geometric point on a plane

polygon

closed geometric path on a plane

real

float4

single precision floating-point number (4 bytes)

smallint

int2

signed two-byte integer

smallserial

serial2

autoincrementing two-byte integer

serial

serial4

autoincrementing four-byte integer

text

variable-length character string

time \[ (p) \] \[ without time zone \]

time of day (no time zone)

time \[ (p) \] with time zone

timetz

time of day, including time zone

timestamp \[ (p) \] \[ without time zone \]

date and time (no time zone)

timestamp \[ (p) \] with time zone

timestamptz

date and time, including time zone

tsquery

text search query

tsvector

text search document

txid\_snapshot

user-level transaction ID snapshot (deprecated; see pg\_snapshot)

uuid

universally unique identifier

xml

XML data

------------------------------------------------------------------------

### SQL Operators

#### Logical Operators

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code class="language-javascript">ALL</code></td><td>TRUE if all of the subquery values meet the condition.</td></tr><tr class="even"><td><code class="language-javascript">AND</code></td><td>TRUE if all the conditions separated by AND are TRUE.</td></tr><tr class="odd"><td><code class="language-javascript">ANY</code></td><td>TRUE if any of the subquery values meet the condition.</td></tr><tr class="even"><td><code class="language-javascript">BETWEEN</code></td><td>TRUE if the operand is within the range of comparisons.</td></tr><tr class="odd"><td><code class="language-javascript">EXISTS</code></td><td>TRUE if the subquery returns one or more records.</td></tr><tr class="even"><td><code class="language-javascript">IN</code></td><td>TRUE if the operand is equal to one of a list of expressions.</td></tr><tr class="odd"><td><code class="language-javascript">LIKE</code></td><td>TRUE if the operand matches a pattern (accepts "wildcards").</td></tr><tr class="even"><td><code class="language-javascript">NOT</code></td><td>Displays a record of the conditions(s) is NOT TRUE.</td></tr><tr class="odd"><td><code class="language-javascript">OR</code></td><td>TRUE if any of the conditions separated by OR is TRUE.</td></tr><tr class="even"><td><code class="language-javascript">SOME</code></td><td>TRUE if any of the subquery values meet the condition.</td></tr></tbody></table>

#### Arithmetic Operators

<table><thead><tr class="header"><th>Operator</th><th>Meaning</th><th>Syntax</th></tr></thead><tbody><tr class="odd"><td>+</td><td>Addition</td><td>a + b</td></tr><tr class="even"><td>-</td><td>Subtraction</td><td>a - b</td></tr><tr class="odd"><td>*</td><td>Multiplication</td><td>a * b</td></tr><tr class="even"><td>/</td><td>Division</td><td>a / b</td></tr><tr class="odd"><td>%</td><td>Modulus (remainder)</td><td>a % b</td></tr></tbody></table>

#### Comparison Operators

Operator

Meaning

Syntax

=

Equals

a = b

!=

Not equal to

a != b

&lt;&gt;

Not equal to

a &lt;&gt; b

Greater than

a &gt; b

&lt;

Less than

a &lt; b

&gt;=

Greater or equal

a &gt;= b

&lt;=

Less or equal

a &lt;= b

!&lt;

Not less than

a !&lt; b

!&gt;

Not greater than

a !&gt; b

-   <a href="#sql" class="btn">SQL</a>  
    - <a href="#structured-query-language" class="btn">Structured Query Language</a>  
    - <a href="#lightblue-postgresql-lightblue" class="btn">PostgreSQL</a>
    -   <a href="#sql-commands" class="btn">SQL Commands</a>
        -   <a href="#user-management" class="btn">User Management</a>
            -   <a href="#creating-users" class="btn">Creating Users</a>
            -   <a href="#deleting-users" class="btn">Deleting Users</a>
            -   <a href="#setting-roles" class="btn">Setting Roles</a>
        -   <a href="#database-management" class="btn">Database Management</a>
            -   <a href="#creating-a-database" class="btn">Creating a Database</a>
            -   <a href="#deleting-a-database" class="btn">Deleting a Database</a>
        -   <a href="#table-management" class="btn">Table Management</a>
            -   <a href="#creating-a-table" class="btn">Creating a Table</a>
            -   <a href="#altering-tables" class="btn">Altering Tables</a>
            -   <a href="#adding-rows-values" class="btn">Adding Rows (Values)</a>
        -   <a href="#queries" class="btn">Queries</a>
            -   <a href="#select-query" class="btn">Select Query</a>
            -   <a href="#where-clause" class="btn">WHERE clause</a>
            -   <a href="#order-by" class="btn">ORDER BY</a>
        -   <a href="#constraints" class="btn">Constraints</a>
            -   <a href="#check-constraints" class="btn">Check Constraints</a>
            -   <a href="#not-null-constraints" class="btn">Not-Null Constraints</a>
            -   <a href="#unique-constraints" class="btn">Unique Constraints</a>
            -   <a href="#primary-keys" class="btn">Primary Keys</a>
            -   <a href="#foreign-keys" class="btn">Foreign Keys</a>
    -   <a href="#sql-data-types" class="btn">SQL Data Types</a>
    -   <a href="#sql-operators" class="btn">SQL Operators</a>
        -   <a href="#logical-operators" class="btn">Logical Operators</a>
        -   <a href="#arithmetic-operators" class="btn">Arithmetic Operators</a>
        -   <a href="#comparison-operators" class="btn">Comparison Operators</a>

<span id="sidebar-toc-btn">≡</span>
