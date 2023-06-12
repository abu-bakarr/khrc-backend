"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("HumoralsSampleStorage", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			subjectId: Sequelize.STRING,
			visitName: Sequelize.STRING,
			modifyAliquot: Sequelize.STRING,
			room_allocation: Sequelize.STRING,
			freezerNumber: Sequelize.STRING,
			boxNumber: Sequelize.STRING,
			column: Sequelize.STRING,
			row: Sequelize.STRING,
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
		await queryInterface.dropTable("HumoralsSampleStorage");
	},
};
