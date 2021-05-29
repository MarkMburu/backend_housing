exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    // table.uuid('projectId').unsigned().index().references('id').inTable('projects').notNullable();
    await db.schema.createTable('project', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('creditorId').unsigned().index().references('id').inTable('member').notNullable();
      table.string('lronumber', 100).notNullable();
      table.string('projectname', 100).notNullable();
      table.integer('size').notNullable();
      table.string('nationalid', 100).notNullable();
      table.string('location', 100).notNullable();
      table.string("accountnumber",50).notNullable();
      table.string("name",100).notNullable();
      table.string("address",50).notNullable();
      table.integer("amount").notNullable();
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('project');
  };
  