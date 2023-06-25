const { ROLE } = require("../middleware/authRole");

const canViewProject = (user, projects) => {
	return user.role === ROLE.ADMIN || projects.userID === user.id;
};

const canAccesData = async (user, projects) => {
	if (user.role === ROLE.ADMIN) return projects;
	console.log("user", user);
	console.log("projects", projects);
	return await projects.filter(
		(proj) => proj?.pbmc_sample.dataValues.user_id === user.id
	);
};

const canDelete = (user) => {
	return user.role === ROLE.ADMIN;
};
const canModify = (user) => {
	return user.role === ROLE.ADMIN;
};
module.exports = { canDelete, canModify, canViewProject, canAccesData };
