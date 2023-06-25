const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { Users } = require("./users");
const moment = require("moment");

const SampleReceipt = sequelize.define(
	"sample_receipt",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		samplereceiptid: DataTypes.STRING,
		studyname: {
			type: DataTypes.STRING,
			validate: {
				len: [2, 255],
			},
		},
		subject: DataTypes.STRING,
		visitname: DataTypes.STRING,
		visitdate: DataTypes.DATE,
		ageatvisit: DataTypes.STRING,
		samplecollectiondate: DataTypes.DATE,
		blooddrawtime: DataTypes.TIME,
		samplereceiptdate: DataTypes.DATE,
		samplereceipttime: DataTypes.TIME,
		hematologysample: DataTypes.STRING,
		chemistrysample: DataTypes.STRING,
		humoralsample: DataTypes.STRING,
		cellularsample: DataTypes.STRING,
		comments: DataTypes.STRING,
	},
	{
		timestamps: true,
		underscored: true,
	}
);

SampleReceipt.belongsTo(Users, { foreignKey: "user_id", targetKey: "id" });
Users.hasMany(SampleReceipt, { foreignKey: "user_id", sourceKey: "id" });

module.exports = { SampleReceipt };
