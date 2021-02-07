const db = require("../../database/dbconfig");

module.exports = {
  find,
  findByUser,
  findById,
  add,
  update,
  destroy,
};

function find() {
  return db("information")
    .join("users", "users.id", "information.usersId")
    .select(
      "information.id",
      "information.title",
      "information.description",
      "information.tags",
      "information.usersId"
    );
}

function findById(id) {
  return db("information")
    .join("users", "users.id", "information.usersId")
    .select(
      "information.id",
      "information.title",
      "information.description",
      "information.tags"
    )
    .where("information.id", id)
    .first();
}

function add(information) {
  return db("information")
    .insert(information, "id")
    .then((id) => {
      return findById(id);
    });
}

function update(updates, id) {
  return db("information").where({ id }).update(updates);
}

function destroy(id) {
  return db("information").where("id", id).del();
}

function findByUser(usersId) {
  return db("information")
    .join("users", "users.id", "information.usersId")
    .select(
      "users.id",
      "information.id",
      "information.title",
      "information.description",
      "information.tags",
      "users.username",
      "users.password",
      "users.email"
    )
    .where("information.UsersId", usersId);
}
