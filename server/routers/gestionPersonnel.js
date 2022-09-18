const express = require("express");
const gestionPersonnel = require("../controllers/gestionPersonnel");
const router = express.Router();

router.route("/add").post(gestionPersonnel.add_gestionPersonnel);

router.route("/findOnen/:_id").get(gestionPersonnel.find_one_gestionPersonnel);

router.route("/findMany").get(gestionPersonnel.add_many_gestionPersonnel);

router.route("/updateOne/:_id").put(gestionPersonnel.update_one_gestionPersonnel);

router.route("/deleteOne/:_id").delete(gestionPersonnel.delete_one_gestionPersonnel);

router.route("/findAll").get(gestionPersonnel.find_all_gestionPersonnel);

module.exports = router;
