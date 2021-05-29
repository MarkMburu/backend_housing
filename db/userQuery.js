const knex = require("./knex");

module.exports = {
  getAllUsers() {
    return knex("users");
  },
  create(data) {
    return knex("users").insert(data, "*");
  },
  getById(id){
        return knex("users").where({'id':id})
    },
    updateUser(id,data){
        return knex('users')
        .where({ "id": id })
        .update(data,"*")
     },
     deleteUser(id){
         return knex("users").where({ "id": id })
         .del()
     },
   getUser(username){
         return knex("users").where({"username": username})
     }
};
