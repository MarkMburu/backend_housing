
exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    // table.uuid('houseprojectId').unsigned().index().references('id').inTable('houseprojects').notNullable();
    await db.schema.createTable('houseproject', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.string('projectname', 100).notNullable();
      table.integer('projectnumber').notNullable();
      table.string('location', 100).notNullable();
      table.integer("numberofunits").notNullable();
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('houseproject');
  };
  