const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcrypt");

const Users = sequelize.define(
	"Users",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			validate: {
				len: [2, 255],
			},
		},
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		role: DataTypes.STRING,
		email: DataTypes.STRING,

		password: DataTypes.STRING,
	},
	{ timestamps: true },

	{
		hooks: {
			beforeCreate: async (user) => {
				if (user.password) {
					const salt = await bcrypt.genSaltSync(10, user.password);
					user.password = bcrypt.hashSync(user.password, salt);
				}
			},
			beforeUpdate: async (user) => {
				if (user.password) {
					const salt = await bcrypt.genSaltSync(10, "a");
					user.password = bcrypt.hashSync(user.password, salt);
				}
			},
		},
		instanceMethods: {
			validPassword: (password) => {
				return bcrypt.compareSync(password, this.password);
			},
			toJSON: function () {
				var values = Object.assign({}, this.get());

				delete values.password;
				return values;
			},
		},
	}
);
Users.sync();

sequelize.sync({ alter: true });

module.exports = { Users };
