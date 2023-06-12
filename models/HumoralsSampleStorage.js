const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const HumoralsSampleStorage = sequelize.define(
	"HumoralsSampleStorage",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		subjectId: DataTypes.STRING,
		visitName: DataTypes.STRING,
		modifyAliquot: DataTypes.STRING,
		room_allocation: DataTypes.STRING,
		freezerNumber: DataTypes.STRING,
		boxNumber: DataTypes.STRING,
		column: DataTypes.STRING,
		row: DataTypes.STRING,
		comments: DataTypes.STRING,
		aliquotId: DataTypes.STRING,
		boxId: DataTypes.STRING,
		aliquotStored: DataTypes.STRING,
	},
	{ timestamps: true }
);

HumoralsSampleStorage.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(HumoralsSampleStorage, { foreignKey: "userId" });

HumoralsSampleStorage.sync();

module.exports = HumoralsSampleStorage;
