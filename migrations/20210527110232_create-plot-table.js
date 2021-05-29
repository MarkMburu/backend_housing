exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    // table.uuid('phaseId').unsigned().index().references('id').inTable('phases').notNullable();
    await db.schema.createTable('plot', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('projectId').unsigned().index().references('id').inTable('project').notNullable();
      table.uuid('phaseId').unsigned().index().references('id').inTable('phase');
      table.string('plotnumber', 100).notNullable();
      table.integer('size').notNullable();
      table.string('purchase', 100).notNullable();
      table.string('installment', 100).notNullable();
      table.integer("costprice").notNullable();
      table.integer("price").notNullable();
      table.integer("installments").notNullable();
      table.string("plotPrefix").notNullable();
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('plot');
  };
  