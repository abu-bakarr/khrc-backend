const { Users } = require("../models/users");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { canAccesData } = require("../privilege/accessRights");
require("dotenv").config();

module.exports = {
	add: async (req, res) => {
		const { firstName, lastName, role, username, email, password } = req.body;

		const salt = await bcrypt.genSaltSync(10);
		const hashPassword = await bcrypt.hashSync(password, salt);

		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		if (user) {
			res.status(409).jsonp({ error: "Email exist" });
			return;
		}

		const resp = await Users.create({
			firstName,
			lastName,
			email,
			role,
			username,
			password: hashPassword,
		});
		const payload = {
			user: {
				firstName,
				role,
				email,
			},
		};

		return await jsonwebtoken.sign(
			payload,
			process.env.JWT_SECRET,
			{
				expiresIn: "1d",
			},
			(err, _) => {
				if (err) {
					return res.json(err);
				} else {
					return res.status(200).json({ success: "User Added Successful" });
				}
			}
		);
	},

	getAll: async (req, res) => {
		try {
			const allUsers = await Users.findAll({
				attributes: [
					"id",
					"username",
					"firstName",
					"lastName",
					"email",
					"role",
				],
			});
			console.log(
				"Login User Role",
				req.user.user,
				"================================================================"
			);
			if (allUsers) {
				res.json({
					confirm: "Succes",
					data: canAccesData(req.user.user, allUsers),
				});
				return;
			}
			res.json({
				confirm: "Unable to get Users",
				data: [],
			});
		} catch (err) {
			res.json({
				confirm: "failed: cannot fetch users",
				data: err,
			});
		}
	},
	getById: async (req, res) => {
		const { id } = req.params;
		try {
			const singleUser = await Users.findOne({
				where: {
					id: id,
				},
			});
			if (singleUser) {
				res.json({
					confirm: "Succes",
					data: singleUser,
				});
				return;
			}
			res.json({
				confirm: "Not Exist",
				data: [],
			});
		} catch (err) {
			res.json({
				confirm: "fail",
				data: "invalid input",
			});
		}
	},
	deleteOne: (req, res) => {
		const { id } = req.params;
		Users.destroy({
			where: {
				id: id,
			},
		})
			.then((users) => {
				res.json({
					confirm: "Succes",
					data: users,
				});
			})
			.catch((err) => {
				res.json({
					confirm: "fail",
					data: err.message,
				});
			});
	},
	update: (req, res) => {
		const { id } = req.params;
		Users.update(req.body, {
			where: {
				id: id,
			},
		})
			.then((users) => {
				res.json({
					confirm: "Succes",
					data: users,
				});
			})
			.catch((err) => {
				res.json({
					confirm: "fail to update user",
					data: err.message,
				});
			});
	},
};
