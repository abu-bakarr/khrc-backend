const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const PBMCSampleStorage = sequelize.define(
	"PBMCSampleStorage",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		subjectId: DataTypes.STRING,
		visitName: DataTypes.STRING,
		modifyAliquot: DataTypes.STRING,
		aliquotstored: DataTypes.STRING,
		roomAllocation: DataTypes.STRING,
		freezerNumber: DataTypes.STRING,
		boxNumber: DataTypes.STRING,
		column: DataTypes.STRING,
		row: DataTypes.STRING,
		comments: DataTypes.STRING,
		aliquotId: DataTypes.STRING,
		boxId: DataTypes.STRING,
	},
	{ timestamps: true }
);

PBMCSampleStorage.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(PBMCSampleStorage, { foreignKey: "userId" });

PBMCSampleStorage.sync();

module.exports = PBMCSampleStorage;
