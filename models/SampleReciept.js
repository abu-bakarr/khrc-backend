const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");

const SampleReceipt = sequelize.define(
	"SampleReceipt",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		studyName: {
			type: DataTypes.STRING,
			validate: {
				len: [2, 255],
			},
		},
		visitName: DataTypes.STRING,
		visitDate: DataTypes.DATEONLY,
		subjectAge: DataTypes.STRING,
		collectionDate: DataTypes.DATEONLY,
		collectionTime: DataTypes.TIME,
		receptionDate: DataTypes.DATEONLY,
		receptionTime: DataTypes.TIME,
		hematolog: DataTypes.STRING,
		chemistry: DataTypes.STRING,
		humIm: DataTypes.STRING,
		cellIm: DataTypes.STRING,
		comments: DataTypes.STRING,
		aliquotId: DataTypes.STRING,
		boxId: DataTypes.STRING,
		aliquotStored: DataTypes.STRING,
	},
	{ timestamps: true }
);

// Define the association between SampleReceipt and User models
SampleReceipt.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(SampleReceipt, { foreignKey: "userId" });

SampleReceipt.sync();

module.exports = SampleReceipt;
