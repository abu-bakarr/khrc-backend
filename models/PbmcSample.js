const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const PBMCSample = sequelize.define(
	"pbmc_sample",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		pbmcsampletid: DataTypes.STRING,
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
	{ timestamps: true, underscored: true }
);

PBMCSample.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(PBMCSample, { foreignKey: "user_id" });

module.exports = { PBMCSample };
