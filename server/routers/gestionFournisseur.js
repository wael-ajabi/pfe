const express = require("express");
const gestionFournisseur = require("../controllers/gestionFournisseur");
const router = express.Router();

router.route("/add").post(gestionFournisseur.add_gestionFournisseur);

router
	.route("/findOnen/:_id")
	.get(gestionFournisseur.find_one_gestionFournisseur);

router.route("/findMany").get(gestionFournisseur.add_many_gestionFournisseur);

router
	.route("/updateOne/:_id")
	.put(gestionFournisseur.update_one_gestionFournisseur);

router
	.route("/deleteOne/:_id")
	.delete(gestionFournisseur.delete_one_gestionFournisseur);

router.route("/findAll").get(gestionFournisseur.find_all_gestionFournisseur);

module.exports = router;
