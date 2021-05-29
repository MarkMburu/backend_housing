exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    await db.schema.createTable('test', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.string('name', 120).notNullable();
      table.string('address', 120).notNullable();
      table.string('age', 120).notNullable();
      table.timestamps(false, true);
    })
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('test');
  };