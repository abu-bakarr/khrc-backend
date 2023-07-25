const { Users } = require("../models/users");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
	Login: async (req, res) => {
		const { email, password } = req.body;

		console.log("Login BACKEND", email, password);

		try {
			const user = await Users.findOne({
				where: {
					email,
				},
			});

			if (!user) {
				res.json({ error: "User not found" });
				return;
			}
			console.log("data:", user);

			const userPass = user.dataValues.password;
			const isMatch = await bcrypt.compareSync(password, userPass);

			if (!isMatch) {
				return res.json({ error: "Password does not match" });
			}

			const payload = {
				user: {
					id: user.dataValues.user_id,
					email,
					role: user.dataValues.role,
					name: user.dataValues.firstName,
				},
			};

			const token = await jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
				expiresIn: "10d",
			});
			return res.json({ accessToken: token });
		} catch (error) {
			const response = {
				status: 500,
				data: {},
				error: {
					message: "user match failed",
				},
			};
			res.json(response);
			return;
		}
	},
};
