const knex = require("./knex");

module.exports = {
  getAllPlot() {
    return knex("plot");
  },
  create(data) {
    return knex("plot").insert(data, "*");
  },
  getByPlotId(id) {
    return knex("plot").where({ id: id });
  },
  updatePlot(id, data) {
    return knex("plot").where({ id: id }).update(data, "*");
  },
  deletePlot(id) {
    return knex("plot").where({ id: id }).del();
  },
};
