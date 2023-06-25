module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable("pbmc_samples", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			pbmcsampletid: {
				type: DataTypes.STRING,
			},
			boxid: {
				type: DataTypes.STRING,
			},
			aliquotid: {
				type: DataTypes.STRING,
			},
			subject: {
				type: DataTypes.STRING,
			},
			visitname: {
				type: DataTypes.STRING,
			},
			sampletype: {
				type: DataTypes.STRING,
			},
			aliquot: {
				type: DataTypes.STRING,
			},
			aid: {
				type: DataTypes.STRING,
			},
			roomlocation: {
				type: DataTypes.STRING,
			},
			freezernumber: {
				type: DataTypes.STRING,
			},
			boxnumber: {
				type: DataTypes.STRING,
			},
			columnnumber: {
				type: DataTypes.STRING,
			},
			rownumber: {
				type: DataTypes.STRING,
			},
			shipped: {
				type: DataTypes.STRING,
			},
			shippeddate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			comments: {
				type: DataTypes.STRING,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "tbl_users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable("pbmc_samples");
	},
};
