const knex = require("knex");

const knexConfig = require("../knexfile.js");
// const environment = process.env.NODE_ENV || "development";

// module.exports = knex(knexconfig[environment]);
module.exports = knex(knexConfig.development);

// ('development') this will break postman