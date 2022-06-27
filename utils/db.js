const Sequelize = require("sequelize").Sequelize;
require("dotenv").config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize("ppcs", DB_USERNAME, DB_PASSWORD, {
  dialect: "postgres",
  host: process.env.DB_HOST,
});

module.exports = sequelize;
