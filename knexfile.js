module.exports = {
  development: {
      client: 'pg',
      connection: {
        host:"localhost",
        database: 'housing',
        user: 'postgres',
        password: 'root'
      }
    },
    test: {
      client: 'pg',
      connection: {
        host:"localhost",
        database: 'housing_test',
        user: 'postgres',
        password: 'root'
      }
    },
    // production:{
    //   client:"pg",
    //   connection:{
    //     host:"35.200.199.42",
    //     database:"housing",
    //     user:"postgres",
    //     password:"KtxDbgg6q7uxLEg1"
    //   }
    // }
  };