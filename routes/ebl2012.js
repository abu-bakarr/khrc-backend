const router = require("express").Router();
const ebl2012Controller = require("../controllers/ebl2012.controller");
const auth = require("../middleware/auth");
const { authRole, ROLE } = require("../middleware/authRole");

// Sample Receipt Endpoint
router.post("/sample-receipt", auth, ebl2012Controller.createSampleReceipt);
router.get("/sample-receipt", auth, ebl2012Controller.getSampleReceipt);
// PBMC Sample Endpoint
router.post("/pbmc-sample", auth, ebl2012Controller.createPBMCSample);
router.get("/pbmc-sample", auth, ebl2012Controller.getPBMCSample);
// PBMC Humoral Sample Endpoint
router.post(
	"/humoral-sample-storage",
	auth,
	ebl2012Controller.createHumoralsSampleStorage
);
router.get(
	"/humoral-sample-storage",
	auth,
	ebl2012Controller.getHumoralsSampleStorage
);

module.exports = router;
