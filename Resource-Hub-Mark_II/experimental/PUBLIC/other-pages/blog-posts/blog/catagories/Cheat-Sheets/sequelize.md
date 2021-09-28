Sequelize
=========

-   Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the `sequelize-cli` command.

Command Line
------------

#### Initialize Project

     npm install sequelize sequelize-cli pg
    npx sequelize-cli init

-   You must create a database user, update the `config/config.json` file to match your database settings to complete the initialization process.

#### Create Database

     npx sequelize-cli db:create

### Seeds

#### Generate a new seed file

     npx sequelize-cli seed:generate --name <descriptiveName>

#### Run all pending seeds

     npx sequelize-cli db:seed:all

#### Rollback Seeds

-   ##### One seed

         npx sequelize-cli db:seed:undo

-   ##### All seeds

         npx sequelize-cli db:seed:undo:all

### Migrations

#### Generate a model and its migration

     npx sequelize-cli model:generate --name <ModelName> --attributes<column1>:<type>,<column2>:<type>,...

#### Run all pending migrations

     npx sequelize-cli db:migrate

#### Rollback Migrations

-   ##### One migration

         npx sequelize-cli db:migrate:undo

-   ##### All migrations

         npx sequelize-cli db:migrate:undo:all

Javascript SQL Functions
------------------------

#### Connecting to a Database

    const { Sequelize } = require('sequelize');

    // Option 1: Passing a connection URI
    const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
    const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

    // Option 2a: Passing parameters separately (sqlite)
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'path/to/database.sqlite'
    });
    // Option 2b: Passing parameters separately (other dialects)
    const sequelize = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    });

#### Testing the Connection

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

-   ###### Closing the Connection

        sequelize.close()

#### Create a Table

-   Usually used in the `up()` method

<!-- -->

    return queryInterface.createTable(<TableName>, {
      <columnName>: {
        type: Sequelize.<type>,
        allowNull: <true|false>,
        unique: <true|false>,
        references: {
          model: {
            tableName: <TableName>
          }
        }
      }
    });

#### Delete Table

-   Usually used in the `down()` method

<!-- -->

    return queryInterface.dropTable(<TableName>);

-   ###### To drop the table related to a model:

        await User.drop();

-   ###### To drop all tables:

        await sequelize.drop();

#### Adding a column

    return queryInteface.addColumn(<TableName>, <columnName>: {
      type: Sequelize.<type>,
      allowNull: <true|false>,
      unique: <true|false>,
      references: {
        model: <TableName>
        },
    });

#### Removing a column

    return queryInterface.removeColumn(<TableName>, <columnName>);

------------------------------------------------------------------------

Models
------

-   A Model represents a table in the database. Instances of this class represent a database row.
    -   Model instances operate with the concept of a dataValues property, which stores the actual values represented by the instance. By default, the values from dataValues can also be accessed directly from the Instance, that is:

            instance.field
            // is the same as
            instance.get('field')
            // is the same as
            instance.getDataValue('field')

    -   However, if getters and/or setters are defined for field they will be invoked, instead of returning the value from `dataValues`.
    -   Accessing properties directly or using get is preferred for regular use, `getDataValue` should only be used for custom getters.
    -   See <a href="https://sequelize.org/master/class/lib/model.js~Model.html" class="btn">Public Methods</a>

### Model Basics

-   Models are the essence of Sequelize.
-   A model is an abstraction that represents a table in your database.
    -   In Sequelize, it is a class that extends Model.
-   The model tells Sequelize several things about the entity it represents, such as:
    -   the name of the table in the database
    -   which columns it has (and their data types)

#### Naming Models

-   A model in Sequelize has a name.
    -   This name does not have to be the same name of the table it represents in the database.
    -   Usually, models have singular names (such as `User`) while tables have pluralized names (such as `Users`), although this is fully configurable.

#### Defining a Model

-   Models can be defined in two equivalent ways in Sequelize:
    -   Calling `sequelize.define(modelName, attributes, options)`
    -   Extending Model and calling `init(attributes, options)`
-   After a model is defined, it is available within sequelize.models by its model name.

##### Using `sequelize.define`

    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = new Sequelize('sqlite::memory:');

    const User = sequelize.define('User', {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true

#### Synchronizing a Model

-   In the case where the table doesn't even exist in the database or if it exists, but it has different columns, less columns, or any other difference, models can be synchronized by calling `model.sync(options)`, an asynchronous function (that returns a Promise)
-   With this call, Sequelize will automatically perform an SQL query to the database.

<table><thead><tr class="header"><th>Function</th><th>Action</th></tr></thead><tbody><tr class="odd"><td><code class="language-javascript">User.sync()</code></td><td>This creates the table if it doesn't exist (and does nothing if it already exists)</td></tr><tr class="even"><td><code class="language-javascript">User.sync({ force: true })</code></td><td>This creates the table, dropping it first if it already existed</td></tr><tr class="odd"><td><code class="language-javascript">User.sync({ alter: true })</code></td><td>This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.</td></tr></tbody></table>

##### Promises and `async`/ `await`

-   Most of the methods provided by Sequelize are asynchronous and therefore return Promises.
-   They are all Promises , so you can use the Promise API (for example, using then, catch, finally) out of the box.
-   Of course, using async and await works normally as well.

#### Model Instances

Queries
-------

#### INSERT queries

-   The `Model.create()` method is a shorthand for building an unsaved instance with `Model.build()` and saving the instance with `instance.save()`.

<!-- -->

    // Create a new user
    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);

-   ##### Creating in bulk

    -   Sequelize provides the `Model.bulkCreate` method to allow creating multiple records at once, with only one query.
    -   The usage of `Model.bulkCreate` is very similar to `Model.create`, by receiving an array of objects instead of a single object.

    <!-- -->

        const create = await bulkCreate(records: Array, options: object): Promise<Array<Model>>

    -   by default, `bulkCreate` does not run validations on each object that is going to be created (which create does).
        -   To make `bulkCreate` run these validations as well, you must pass the `validate: true` option. This will decrease performance.

#### SELECT queries

-   You can read the whole table from the database with the findAll method:

<!-- -->

    // Find all users
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));

     SELECT * FROM ...

-   ###### Specifying attributes for SELECT queries:

        Model.findAll({
          attributes: ['foo', 'bar']
        });

         SELECT foo, bar FROM ...

-   ###### Attributes can be renamed using a nested array:

        Model.findAll({
          attributes: ['foo', ['bar', 'baz'], 'qux']
        });

         SELECT foo, bar AS baz, qux FROM ...

-   ###### Applying WHERE clause

    -   The where option is used to filter the query. There are lots of operators to use for the where clause, available as Symbols from <a href="https://sequelize.org/master/variable/index.html#static-variable-Op" class="btn">Operator Symbols</a>.

    <!-- -->

        Post.findAll({
          where: {
            authorId: 2
          }
        });
        // SELECT * FROM post WHERE authorId = 2

#### UPDATE queries

    // Change everyone without a last name to "Doe"
    await User.update({ lastName: "Doe" }, {
      where: {
        lastName: null
      }
    });

#### DELETE queries

    // Delete everyone named "Jane"
    await User.destroy({
      where: {
        firstName: "Jane"
      }
    });

-   ##### Delete in bulk

        const remove = await bulkDelete(records: Array, options: object): Promise<Array<Model>>

### Ordering Results

-   The `order` option takes an array of items to order the query by or a sequelize method.
    -   These items are themselves arrays in the form `[column, direction]`.
    -   The column will be escaped correctly and the direction will be checked in a whitelist of valid directions (such as `ASC`, `DESC`, `NULLS FIRST`, etc).

<!-- -->

    Model.findAll({
      order: [
        // Will escape name and validate DESC | ASC against a list of valid direction parameters
        ['name', 'DESC' | 'ASC']
      ]
    })

    Model.findOne({
      order: [
        // will return `name` DESC or ASC
        ['name', `DESC` | `ASC`],
        // will return max('age')
        sequelize.fn('max', sequelize.col('age')),
        // will return max('age') DESC
        [sequelize.fn('max', sequelize.col('age')), 'DESC'],
      ]
    });

The elements of the order array can be the following:

-   A string (which will be automatically quoted)
-   An array, whose first element will be quoted, second will be appended verbatim
-   An object with a `raw` field:
    -   The content of `raw` will be added verbatim without quoting
    -   Everything else is ignored, and if `raw` is not set, the query will fail
-   A call to `Sequelize.fn` (which will generate a function call in SQL)
-   A call to `Sequelize.col` (which will quote the column name)

#### Limits and Offset

-   The `limit` and `offset` options allow you to work with limiting / pagination:

<!-- -->

    // Fetch 10 instances/rows
    Project.findAll({ limit: 10 });

    // Skip 8 instances/rows
    Project.findAll({ offset: 8 });

    // Skip 5 instances and fetch the 5 after that
    Project.findAll({ offset: 5, limit: 5 });

#### Grouping Results

-   The syntax for grouping and ordering are equal, except that grouping does not accept a direction as last argument of the array (there is no `ASC`, `DESC`, `NULLS FIRST`, etc).

<!-- -->

    Model.findAll({
      group: 'name'
    });
    // yields 'GROUP BY name'

##### Public Methods

<table><thead><tr class="header"><th>Action</th><th>Method</th></tr></thead><tbody><tr class="odd"><td>Add a new column to a table</td><td><code class="language-javascript">async addColumn(table: string, key: string, attribute: object, options: object): Promise</code></td></tr><tr class="even"><td>Add a constraint to a table</td><td><code class="language-javascript">async addConstraint(tableName: string, options: object): Promise</code></td></tr><tr class="odd"><td>Add an index to a column</td><td><code class="language-javascript">async addIndex(tableName: string \| object, attributes: Array, options: object, rawTablename: string): Promise</code></td></tr><tr class="even"><td>Delete multiple records from a table</td><td><code class="language-javascript">async bulkDelete(tableName: string, where: object, options: object, model: Model): Promise</code></td></tr><tr class="odd"><td>Insert multiple records into a table</td><td><code class="language-javascript">async bulkInsert(tableName: string, records: Array, options: object, attributes: object): Promise</code></td></tr><tr class="even"><td>Update multiple records of a table</td><td><code class="language-javascript">async bulkUpdate(tableName: string, values: object, identifier: object, options: object, attributes: object): Promise</code></td></tr><tr class="odd"><td>Change a column definition</td><td><code class="language-javascript">async changeColumn(tableName: string, attributeName: string, dataTypeOrOptions: object, options: object): *</code></td></tr><tr class="even"><td>Create a database</td><td><code class="language-javascript">async createDatabase(database: string, options: object): Promise</code></td></tr><tr class="odd"><td>Create an SQL function</td><td><code class="language-javascript">async createFunction(functionName: string, params: Array, returnType: string, language: string, body: string, optionsArray: Array, options: object): Promise</code></td></tr><tr class="even"><td>Create a schema</td><td><code class="language-javascript">async createSchema(schema: string, options: object): Promise</code></td></tr><tr class="odd"><td>Create a table with given set of attributes</td><td><code class="language-javascript">async createTable(tableName: string, attributes: object, options: object, model: Model): Promise</code></td></tr><tr class="even"><td>Describe a table structure</td><td><code class="language-javascript">async describeTable(tableName: string, options: object): Promise&lt;object&gt;</code></td></tr><tr class="odd"><td>Drop all schemas</td><td><code class="language-javascript">async dropAllSchemas(options: object): Promise</code></td></tr><tr class="even"><td>Drop all tables from database</td><td><code class="language-javascript">async dropAllTables(options: object): Promise</code></td></tr><tr class="odd"><td>Drop a database</td><td><code class="language-javascript">async dropDatabase(database: string, options: object): Promise</code></td></tr><tr class="even"><td>Drop an SQL function</td><td><code class="language-javascript">async dropFunction(functionName: string, params: Array, options: object): Promise</code></td></tr><tr class="odd"><td>Drop a schema</td><td><code class="language-javascript">async dropSchema(schema: string, options: object): Promise</code></td></tr><tr class="even"><td>Drop a table from database</td><td><code class="language-javascript">async dropTable(tableName: string, options: object): Promise</code></td></tr><tr class="odd"><td>Get foreign key references details for the table</td><td><code class="language-javascript">async getForeignKeyReferencesForTable(tableName: string, options: object): *</code></td></tr><tr class="even"><td>Returns all foreign key constraints of requested tables</td><td><code class="language-javascript">async getForeignKeysForTables(tableNames: string[], options: object): Promise</code></td></tr><tr class="odd"><td>Remove a column from a table</td><td><code class="language-javascript">async removeColumn(tableName: string, attributeName: string, options: object): *</code></td></tr><tr class="even"><td>Remove a constraint from a table</td><td><code class="language-javascript">async removeConstraint(tableName: string, constraintName: string, options: object): *</code></td></tr><tr class="odd"><td>Remove an already existing index from a table</td><td><code class="language-javascript">async removeIndex(tableName: string, indexNameOrAttributes: string \| string[], options: object): Promise</code></td></tr><tr class="even"><td>Rename a column</td><td><code class="language-javascript">async renameColumn(tableName: string, attrNameBefore: string, attrNameAfter: string, options: object): Promise</code></td></tr><tr class="odd"><td>Rename an SQL function</td><td><code class="language-javascript">async renameFunction(oldFunctionName: string, params: Array, newFunctionName: string, options: object): Promise</code></td></tr><tr class="even"><td>Rename a table</td><td><code class="language-javascript">async renameTable(before: string, after: string, options: object): Promise</code></td></tr><tr class="odd"><td>Show all schemas</td><td><code class="language-javascript">async showAllSchemas(options: object): Promise&lt;Array&gt;</code></td></tr><tr class="even"><td>Upsert</td><td><code class="language-javascript">async upsert(tableName: string, insertValues: object, updateValues: object, where: object, options: object): Promise&lt;boolean, ?number&gt;</code></td></tr></tbody></table>

### Utility Methods

#### Count

-   The `count` method simply counts the occurrences of elements in the database.

<!-- -->

    console.log(`There are ${await Project.count()} projects`);

    const amount = await Project.count({
      where: {
        id: {
          [Op.gt]: 25
        }
      }
    });
    console.log(`There are ${amount} projects with an id greater than 25`);

#### max, min, and sum

    await User.max('age'); // 40
    await User.max('age', { where: { age: { [Op.lt]: 20 } } }); // 10
    await User.min('age'); // 5
    await User.min('age', { where: { age: { [Op.gt]: 5 } } }); // 10
    await User.sum('age'); // 55
    await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50

##### <a href="https://sequelize.org/master/manual/validations-and-constraints.html" class="btn">Validations and Constraints</a>

------------------------------------------------------------------------

END

-   <a href="#sequelize" class="btn">Sequelize</a>
    -   <a href="#command-line" class="btn">Command Line</a>
        -   <a href="#initialize-project" class="btn">Initialize Project</a>
        -   <a href="#create-database" class="btn">Create Database</a>
        -   <a href="#seeds" class="btn">Seeds</a>
            -   <a href="#generate-a-new-seed-file" class="btn">Generate a new seed file</a>
            -   <a href="#run-all-pending-seeds" class="btn">Run all pending seeds</a>
            -   <a href="#rollback-seeds" class="btn">Rollback Seeds</a>
        -   <a href="#migrations" class="btn">Migrations</a>
            -   <a href="#generate-a-model-and-its-migration" class="btn">Generate a model and its migration</a>
            -   <a href="#run-all-pending-migrations" class="btn">Run all pending migrations</a>
            -   <a href="#rollback-migrations" class="btn">Rollback Migrations</a>
    -   <a href="#javascript-sql-functions" class="btn">Javascript SQL Functions</a>
        -   <a href="#connecting-to-a-database" class="btn">Connecting to a Database</a>
        -   <a href="#testing-the-connection" class="btn">Testing the Connection</a>
        -   <a href="#create-a-table" class="btn">Create a Table</a>
        -   <a href="#delete-table" class="btn">Delete Table</a>
        -   <a href="#adding-a-column" class="btn">Adding a column</a>
        -   <a href="#removing-a-column" class="btn">Removing a column</a>
    -   <a href="#models" class="btn">Models</a>
        -   <a href="#model-basics" class="btn">Model Basics</a>
            -   <a href="#naming-models" class="btn">Naming Models</a>
            -   <a href="#defining-a-model" class="btn">Defining a Model</a>
                -   <a href="#using-sequelizedefine" class="btn">Using <code class="language-javascript">sequelize.define</code></a>
            -   <a href="#synchronizing-a-model" class="btn">Synchronizing a Model</a>
                -   <a href="#promises-and-asyncawait" class="btn">Promises and <code class="language-javascript">async</code>/ <code class="language-javascript">await</code></a>
            -   <a href="#model-instances" class="btn">Model Instances</a>
    -   <a href="#queries" class="btn">Queries</a>
        -   <a href="#insert-queries" class="btn">INSERT queries</a>
        -   <a href="#select-queries" class="btn">SELECT queries</a>
        -   <a href="#update-queries" class="btn">UPDATE queries</a>
        -   <a href="#delete-queries" class="btn">DELETE queries</a>
        -   <a href="#ordering-results" class="btn">Ordering Results</a>
            -   <a href="#limits-and-offset" class="btn">Limits and Offset</a>
            -   <a href="#grouping-results" class="btn">Grouping Results</a>
                -   <a href="#public-methods" class="btn">Public Methods</a>
        -   <a href="#utility-methods" class="btn">Utility Methods</a>
            -   <a href="#count" class="btn">Count</a>
            -   <a href="#max-min-and-sum" class="btn">max, min, and sum</a>
                -   <a href="#validations-and-constraintshttpssequelizeorgmastermanualvalidations-and-constraintshtml" class="btn">Validations and Constraints</a>

<span id="sidebar-toc-btn">≡</span>
