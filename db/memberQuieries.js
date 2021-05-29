const knex = require("./knex");

module.exports = {
  getAllMembers() {
    return knex("member");
  },
  create(data) {
    return knex("member").insert(data, "*");
  },
  getMemberById(id) {
    return knex("member").where({ "id": id });
  },
  updateMember(id, data) {
    return knex("member").where({ "id": id }).update(data, "*");
  },
  deleteMember(id) {
    return knex("member").where({ "id": id }).del();
  },
};
