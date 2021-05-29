exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    // table.uuid('projectId').unsigned().index().references('id').inTable('projects').notNullable();

    await db.schema.createTable('beneficiary', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('memberId').unsigned().index().references('id').inTable('member').notNullable();
      table.string('firstname', 100).notNullable();
      table.string('middlename', 100).notNullable();
      table.string('surname', 100).notNullable();
      table.string('nationalid', 100).notNullable();
      table.string('email', 100).notNullable();
      table.string("contact",50).notNullable();
      table.string("allocation",50).notNullable();
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('beneficiary');
  };
  