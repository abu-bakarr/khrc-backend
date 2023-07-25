const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_CONN); // Example for postgres
module.exports = sequelize;
