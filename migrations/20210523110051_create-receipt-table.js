exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    await db.schema.createTable('receipt', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('memberId').unsigned().index().references('id').inTable('member').notNullable();
      table.uuid('projectId').unsigned().index().references('id').inTable('project');
      table.uuid('houseProjectId').unsigned().index().references('id').inTable('houseproject')
      table.uuid('houseId').unsigned().index().references('id').inTable('house')
      table.integer("accountnumber").notNullable();
      table.integer('rcptno').notNullable();
      table.string("name").notNullable();
      table.string("nationalid").notNullable();
      table.string("contact").notNullable();
      table.string("phase");
      table.string("plotno");
      table.string("reason");
      table.string("description",100);
      table.string("transref");
      table.string("entrytype").notNullable();
      table.integer('amount').notNullable();
      table.dateTime("datecaptured").notNullable();
      table.string('bankname', 100).notNullable();
      table.string("narration").notNullable();
      table.string("status");
      table.integer("balance").notNullable()
      table.string('paymentref', 100);
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('receipt');
  };
  