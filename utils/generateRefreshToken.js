const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateRefreshToken = (user) => {
	return jwt.verify(user, process.env.JWT_SECRET_REFRESH, { expiresIn: "1m" });
};

module.exports = generateRefreshToken;
