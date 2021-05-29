const knex = require("./knex");

module.exports = {
  getAllReceipts() {
    return knex("receipt");
  },
  create(data) {
    return knex("receipt").insert(data, "*");
  },
  getReceiptById(id) {
    return knex("receipt").where({"id": id });
  },
  updateReceipt(id, data) {
    return knex("receipt").where({"id": id }).update(data, "*");
  },
  deleteReceipt(id) {
    return knex("receipt").where({ "id": id }).del();
  },
  getRceiptsPerMember(id) {
    return knex("receipt").where({ id: memberId });
  },
};
