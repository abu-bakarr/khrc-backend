const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const PBMCSample = sequelize.define(
	"PBMCSample",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		subjectId: DataTypes.STRING,
		visitName: DataTypes.STRING,
		modifyAliquot: DataTypes.STRING,
		aliquotStored: DataTypes.STRING,
		roomAllocation: DataTypes.STRING,
		tankNumberId: DataTypes.STRING,
		boxNumber: DataTypes.STRING,
		column: DataTypes.STRING,
		row: DataTypes.STRING,
		comments: DataTypes.STRING,
		aliquotid: DataTypes.INTEGER,
		boxid: DataTypes.INTEGER,
	},
	{ timestamps: true }
);

PBMCSample.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(PBMCSample, { foreignKey: "userId" });

PBMCSample.sync();

module.exports = PBMCSample;
