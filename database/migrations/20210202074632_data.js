exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("email");
    })
    .createTable("information", (tbl) => {
      tbl.increments();
      tbl.string("title", 50).index().notNullable();
      tbl.string("description", 2000).notNullable();
      tbl.string("tags", 50).index().notNullable();
      tbl
        .integer("usersId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("stuff")
    .dropTableIfExists("users")
};
