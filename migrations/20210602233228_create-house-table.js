exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    // table.uuid('houseId').unsigned().index().references('id').inTable('houses').notNullable();
    await db.schema.createTable('house', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('projectId').unsigned().index().references('id').inTable('houseproject').notNullable();
      table.uuid('memberId').unsigned().index().references('id').inTable('member');
      table.integer('plotnumber').notNullable();
      table.integer('housenumber').notNullable();
      table.integer("numberofbedrooms").notNullable();
      table.integer("price").notNullable();
      table.boolean("sold").notNullable().defaultTo(false);
      table.boolean("booked").notNullable().defaultTo(false);
      table.integer("bookingfees");
      table.integer("balance");
      table.string("floor",100);

      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('house');
  };
  