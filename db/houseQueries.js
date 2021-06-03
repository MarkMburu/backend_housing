const knex = require("./knex");

module.exports = {
  getAllHouses() {
    return knex("house");
  },
  create(data) {
    return knex("house").insert(data, "*");
  },
  getHouseById(id) {
    return knex("house").where({ "id": id });
  },
  updateHouse(id, data) {
    return knex("house").where({ "id": id }).update(data, "*");
  },
  deleteHouse(id) {
    return knex("house").where({ "id": id }).del();
  },
};
