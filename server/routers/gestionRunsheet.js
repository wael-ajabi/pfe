//gestionRunsheet
const express = require("express");
const gestionRunsheet = require("../controllers/gestionRunsheet");
const router = express.Router();

router.route("/add").post(gestionRunsheet.add_gestionRunsheet);

router
	.route("/findOnen/:_id")
	.get(gestionRunsheet.find_one_gestionRunsheet);

router.route("/findMany").get(gestionRunsheet.add_many_gestionRunsheet);

router
	.route("/updateOne/:_id")
	.put(gestionRunsheet.update_one_gestionRunsheet);

router
	.route("/deleteOne/:_id")
	.delete(gestionRunsheet.delete_one_gestionRunsheet);

router.route("/findAll").get(gestionRunsheet.find_all_gestionRunsheet);

module.exports = router;
