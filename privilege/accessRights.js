const { ROLE } = require("../middleware/authRole");

const canViewProject = (user, projects) => {
	return user.role === ROLE.ADMIN || projects.userID === user.id;
};

const canAccesData = (user, projects) => {
	if (user.role === ROLE.ADMIN) return projects;
	return projects.filter((proj) => proj.email === user.email);
};

const canDelete = (user) => {
	return user.role === ROLE.ADMIN;
};
const canModify = (user) => {
	return user.role === ROLE.ADMIN;
};
module.exports = { canDelete, canModify, canViewProject, canAccesData };
