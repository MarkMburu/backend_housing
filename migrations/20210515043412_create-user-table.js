exports.up = async db => {
  await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');

  await db.schema.createTable('users', table => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v4()')).primary();
    table.string('username', 50).notNullable().unique();
    table.string('email', 100).notNullable();
    table.string("phone",50).notNullable();
    table.string("password",100).notNullable();
    table.string('access-token', 250);
    table.string('time_zone', 50);
    table.enu('role', ["basic", "supervisor", "admin"]).notNullable().defaultTo("basic");
    table.timestamps(false, true);
    table.timestamp('last_login_at').notNullable().defaultTo(db.fn.now());
  });
};

exports.down = async db => {
  await db.schema.dropTableIfExists('users');
};
