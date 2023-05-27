const router = require("express").Router();
const controller = require("../controllers/users.controller");
const auth = require("../middleware/auth");
const { authRole, ROLE } = require("../middleware/authRole");

router.post("/", controller.add);
router.get("/", auth, controller.getAll);

router.get("/:id", auth, authRole(ROLE.ADMIN), controller.getById);
router.delete("/:id", auth, authRole(ROLE.ADMIN), controller.deleteOne);
router.put("/:id", auth, authRole(ROLE.ADMIN), controller.update);

module.exports = router;
