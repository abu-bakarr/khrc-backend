"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("PBMCSample", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			subjectId: Sequelize.STRING,
			visitName: Sequelize.STRING,
			modifyAliquot: Sequelize.STRING,
			aliquotStored: Sequelize.STRING,
			roomAllocation: Sequelize.STRING,
			tankNumberId: Sequelize.STRING,
			boxNumber: Sequelize.STRING,
			column: Sequelize.STRING,
			row: Sequelize.STRING,
			comments: Sequelize.STRING,
			aliquotid: Sequelize.INTEGER,
			boxid: Sequelize.INTEGER,
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
		await queryInterface.dropTable("PBMCSample");
	},
};
