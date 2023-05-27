function authRole(role) {
	return (req, res, next) => {
		if (req.user.user.role !== role) {
			return res.status(401).json({ msg: "Not Allow" });
		}
		next();
	};
}

const ROLE = {
	ADMIN: "ADMIN",
	USER: "USER",
};

module.exports = {
	authRole,
	ROLE,
};
