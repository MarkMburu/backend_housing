exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    await db.schema.createTable('agent', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.string('fullname', 100).notNullable();
      table.string('nationalid', 100).notNullable();
      table.string('email', 100).notNullable();
      table.string("contact",50).notNullable();

      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('agent');
  };
  