//gestionHub

const express = require("express");
const gestionHub = require("../controllers/gestionHub");
const router = express.Router();

router.route("/add").post(gestionHub.add_gestionHub);

router
	.route("/findOnen/:_id")
	.get(gestionHub.find_one_gestionHub);

router.route("/findMany").get(gestionHub.add_many_gestionHub);

router
	.route("/updateOne/:_id")
	.put(gestionHub.update_one_gestionHub);

router
	.route("/deleteOne/:_id")
	.delete(gestionHub.delete_one_gestionHub);

router.route("/findAll").get(gestionHub.find_all_gestionHub);

module.exports = router;
