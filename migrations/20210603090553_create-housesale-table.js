
 exports.up = async db => {
    await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');
    
    await db.schema.createTable('receipt', table => {
      table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
      table.uuid('memberId').unsigned().index().references('id').inTable('member')
      table.uuid('projectId').unsigned().index().references('id').inTable('project');
      table.uuid('houseProjectId').unsigned().index().references('id').inTable('houseproject')
      table.uuid('houseId').unsigned().index().references('id').inTable('house')
      table.integer("accountnumber")
      table.integer('rcptno')
      table.string("name")
      table.string("nationalid")
      table.string("contact")
      table.integer('amount')
      table.integer('price')
      table.dateTime("datecaptured")
      table.string('bankname', 100)
      table.integer("installments")
      table.string("status");
      table.integer("balance")
      table.string('paymentref', 100);
      table.timestamps(false, true);
    });
  };
  
  exports.down = async db => {
    await db.schema.dropTableIfExists('receipt');
  };
  