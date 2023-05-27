const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token === undefined) {
		return res.status(401).json({ msg: "Not Authorized" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		res.status(400).json({ msg: "Invalid Token sent" });
	}
};
