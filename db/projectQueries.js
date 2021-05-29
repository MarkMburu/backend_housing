const knex = require("./knex");

module.exports = {
  getAllProjects() {
    return knex("project");
  },
  create(data) {
    return knex("project").insert(data, "*");
  },
  getProjectById(id) {
    return knex("project").where({ "id": id });
  },
  updateProject(id, data) {
    return knex("project").where({ "id": id }).update(data, "*");
  },
  deleteProject(id) {
    return knex("project").where({ "id": id }).del();
  },
};
