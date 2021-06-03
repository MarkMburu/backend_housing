const knex = require("./knex");

module.exports = {
  getAllHouseProjects() {
    return knex("houseproject");
  },
  create(data) {
    return knex("houseproject").insert(data, "*");
  },
  getHouseProjectById(id) {
    return knex("houseproject").where({ "id": id });
  },
  updateHouseProject(id, data) {
    return knex("houseproject").where({ "id": id }).update(data, "*");
  },
  deleteHouseProject(id) {
    return knex("houseproject").where({ "id": id }).del();
  },
};
