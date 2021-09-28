Sequelize Cheatsheet
====================

Command Line
------------

Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the `sequelize-cli` command.

### Init Project

    npm install sequelize@^5.0.0
    npm install sequelize-cli@^5.0.0
    npm install pg@^8.0.0

    $ npx sequelize-cli init

You must create a database user, and update the `config/config.json` file to match your database settings to complete the initialization process.

### Create Database

    $ npx sequelize-cli db:create
    $ npx sequelize-cli db:create --env="test"

### Generate a model and its migration

    $ npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,<column2>:<type>,...

### Run pending migrations

    $ npx sequelize-cli db:migrate

### Rollback one migration

    $ npx sequelize-cli db:migrate:undo

### Rollback all migrations

    $ npx sequelize-cli db:migrate:undo:all

### Generate a new seed file

    $ npx sequelize-cli seed:generate --name <descriptiveName>

### Run all pending seeds

    $ npx sequelize-cli db:seed:all

### Rollback one seed

    $ npx sequelize-cli db:seed:undo

### Rollback all seeds

    $ npx sequelize-cli db:seed:undo:all

Migrations
----------

### Column Attribute Keywords

    <columnName>: {
        type: Sequelize.<type>,
        allowNull: <true|false>,
        unique: <true|false>,
        references: { model: <TableName> }, // This is the plural table name that the column references.
    }

Model Associations
------------------

### One to One between Student and Scholarship

`student.js`

        Student.hasOne(models.Scholarship, { foreignKey: 'studentId' });

`scholarship.js`

        Scholarship.belongsTo(models.Student, { foreignKey: 'studentId' });

### One to Many between Student and Class

`student.js`

        Student.belongsTo(models.Class, { foreignKey: 'classId' });

`class.js`

        Class.hasMany(models.Student, { foreignKey: 'classId' });

### Many to Many between Student and Lesson through StudentLessons table

`student.js`

        const columnMapping = {
            through: 'StudentLesson', // This is the model name referencing the join table.
            otherKey: 'lessonId',
            foreignKey: 'studentId'
        }

        Student.belongsToMany(models.Lesson, columnMapping);

`lesson.js`

        const columnMapping = {
            through: 'StudentLesson', // This is the model name referencing the join table.
            otherKey: 'studentId',
            foreignKey: 'lessonId'
        }

        Lesson.belongsToMany(models.Student, columnMapping);

Query Format
------------

### findOne

    <Model>.findOne({
      where: {
        <column>: {
            [Op.<operator>]: <value>
        }
      },
    });

### findAll

    <Model>.findAll({
      where: {
        <column>: {
            [Op.<operator>]: <value>
        }
      },
      include: <include_specifier>,
      offset: 10,
      limit: 2
    });

### findByPk

    <Model>.findByPk(<primary_key>, {
        include: <include_specifier>
    });

### Common Where Operators

    const Op = Sequelize.Op

    [Op.and]: [{a: 5}, {b: 6}] // (a = 5) AND (b = 6)
    [Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
    [Op.gt]: 6,                // > 6
    [Op.gte]: 6,               // >= 6
    [Op.lt]: 10,               // < 10
    [Op.lte]: 10,              // <= 10
    [Op.ne]: 20,               // != 20
    [Op.eq]: 3,                // = 3
    [Op.is]: null              // IS NULL
    [Op.not]: true,            // IS NOT TRUE
    [Op.between]: [6, 10],     // BETWEEN 6 AND 10
    [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
    [Op.in]: [1, 2],           // IN [1, 2]
    [Op.notIn]: [1, 2],        // NOT IN [1, 2]
    [Op.like]: '%hat',         // LIKE '%hat'
    [Op.notLike]: '%hat'       // NOT LIKE '%hat'
    [Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
    [Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
    [Op.startsWith]: 'hat'     // LIKE 'hat%'
    [Op.endsWith]: 'hat'       // LIKE '%hat'
    [Op.substring]: 'hat'      // LIKE '%hat%'
    [Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
    [Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
    [Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
    [Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
    [Op.like]: { [Op.any]: ['cat', 'hat']}

-   <a href="#sequelize-cheatsheet" class="btn">Sequelize Cheatsheet</a>
    -   <a href="#command-line" class="btn">Command Line</a>
        -   <a href="#init-project" class="btn">Init Project</a>
        -   <a href="#create-database" class="btn">Create Database</a>
        -   <a href="#generate-a-model-and-its-migration" class="btn">Generate a model and its migration</a>
        -   <a href="#run-pending-migrations" class="btn">Run pending migrations</a>
        -   <a href="#rollback-one-migration" class="btn">Rollback one migration</a>
        -   <a href="#rollback-all-migrations" class="btn">Rollback all migrations</a>
        -   <a href="#generate-a-new-seed-file" class="btn">Generate a new seed file</a>
        -   <a href="#run-all-pending-seeds" class="btn">Run all pending seeds</a>
        -   <a href="#rollback-one-seed" class="btn">Rollback one seed</a>
        -   <a href="#rollback-all-seeds" class="btn">Rollback all seeds</a>
    -   <a href="#migrations" class="btn">Migrations</a>
        -   <a href="#column-attribute-keywords" class="btn">Column Attribute Keywords</a>
    -   <a href="#model-associations" class="btn">Model Associations</a>
        -   <a href="#one-to-one-between-student-and-scholarship" class="btn">One to One between Student and Scholarship</a>
        -   <a href="#one-to-many-between-student-and-class" class="btn">One to Many between Student and Class</a>
        -   <a href="#many-to-many-between-student-and-lesson-through-studentlessons-table" class="btn">Many to Many between Student and Lesson through StudentLessons table</a>
    -   <a href="#query-format" class="btn">Query Format</a>
        -   <a href="#findone" class="btn">findOne</a>
        -   <a href="#findall" class="btn">findAll</a>
        -   <a href="#findbypk" class="btn">findByPk</a>
        -   <a href="#common-where-operators" class="btn">Common Where Operators</a>

<span id="sidebar-toc-btn">≡</span>
