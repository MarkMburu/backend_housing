module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "housing",
      user: "postgres",
      password: "root",
    },
  },
  test: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "housing_test",
      user: "postgres",
      password: "root",
    },
  },
  production: {
    client: "pg",
    connection:process.env.DATABASE_URL,
    pool:{
      min:2,
      max:10
    },
    migartions:{
      tablename:'knex_migartions',
      directory: "./migrations"
    }
  },
};
