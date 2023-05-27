const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_CONNECTION); // Example for postgres
sequelize
	.sync({ force: false }) // set force to true if you want to drop and recreate tables on each server start
	.then(() => {
		console.log("Database and tables created (if not exist)");
	})
	.catch(console.error);
module.exports = sequelize;
