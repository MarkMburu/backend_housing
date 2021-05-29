exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
  
    await db.schema.createTable('member', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.string('accounttype', 100).notNullable();
      table.integer('accountnumber').notNullable();
      table.string("name").notNullable();
      table.string("firstname",100);
      table.string("middlename",100);
      table.string("surname",100);
      table.string('nationalid', 100).notNullable();
      table.string('krapin', 100).notNullable();
      table.string('gender', 100).notNullable();
      table.string('maritalstatus', 100).notNullable();
      table.dateTime("dateofbirth").notNullable();
      table.string('country', 100).notNullable();
      table.string('estate', 100).notNullable();
      table.string('email', 100).notNullable();
      table.string("contact",50).notNullable();
      table.string("alternativecontact",100);
      table.string('agentname', 250);
      table.string('branch', 50);
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('member');
  };
  