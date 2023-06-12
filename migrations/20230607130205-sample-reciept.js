"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("SampleReceipt", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			studyName: Sequelize.STRING,
			visitName: Sequelize.STRING,
			visitDate: Sequelize.DATEONLY,
			subjectAge: Sequelize.STRING,
			collectionDate: Sequelize.DATEONLY,
			collectionTime: Sequelize.TIME,
			receptionDate: Sequelize.DATEONLY,
			receptionTime: Sequelize.TIME,
			hematolog: Sequelize.STRING,
			chemistry: Sequelize.STRING,
			humIm: Sequelize.STRING,
			cellIm: Sequelize.STRING,
			comments: Sequelize.STRING,
			aliquotId: Sequelize.STRING,
			boxId: Sequelize.STRING,
			aliquotStored: Sequelize.STRING,
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("SampleReceipt");
	},
};
