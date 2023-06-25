const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const HumoralsSampleStorage = sequelize.define(
	"humorals_sample_storage",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		humoralsamplestorageid: DataTypes.STRING,
		boxid: DataTypes.STRING,
		aliquotid: DataTypes.STRING,
		subject: DataTypes.STRING,
		visitname: DataTypes.STRING,
		sampletype: DataTypes.STRING,
		aliquot: DataTypes.STRING,
		aid: DataTypes.STRING,
		roomlocation: DataTypes.STRING,
		freezernumber: DataTypes.INTEGER,
		boxnumber: DataTypes.INTEGER,
		columnnumber: DataTypes.INTEGER,
		rownumber: DataTypes.INTEGER,
		shipped: DataTypes.STRING,
		shippeddate: DataTypes.DATE,
		comments: DataTypes.STRING,
	},
	{
		timestamps: true,
		underscored: true,
	}
);

HumoralsSampleStorage.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(HumoralsSampleStorage, { foreignKey: "user_id" });

module.exports = { HumoralsSampleStorage };
