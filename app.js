const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./config/dbConfig.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./utils/swagger.json");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api", (req, res) => {
	res.json({ message: "Welcome to KHRC Backend API" });
});

(async function checkConnection() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();

module.exports = app;
