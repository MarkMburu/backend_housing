const knex = require("./knex");

module.exports = {
  getAllPlots() {
    return knex("test");
  },
  create(data) {
    return knex("test").insert(data, "*");
  },
};
