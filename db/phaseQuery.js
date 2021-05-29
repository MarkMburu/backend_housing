const knex = require("./knex");

module.exports = {
  getAllPhase() {
    return knex("phase");
  },
  create(data) {
    return knex("phase").insert(data, "*");
  },
  getByPhaseId(id) {
    return knex("phase").where({ id: id });
  },
  updatePhase(id, data) {
    return knex("phase").where({ id: id }).update(data, "*");
  },
  deletePhase(id) {
    return knex("phase").where({ id: id }).del();
  },
};
