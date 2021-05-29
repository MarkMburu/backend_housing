const knex = require("./knex");

module.exports = {
  getAllBeneficiaries() {
    return knex("beneficiary");
  },
  create(data) {
    return knex("beneficiary").insert(data, "*");
  },
  getByBeneficiaryId(id) {
    return knex("beneficiary").where({ "id": id });
  },
  updateBeneficiary(id, data) {
    return knex("beneficiary").where({ "id": id }).update(data, "*");
  },
  deleteBeneficiary(id) {
    return knex("beneficiary").where({ "id": id }).del();
  },
  getByBeneficiaryByMember(id) {
    return knex("beneficiary").where({ "memberId":id });
  },
};
