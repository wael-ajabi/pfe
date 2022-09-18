const express = require("express");
const gestionColis = require("../controllers/gestionColis");
const router = express.Router();

router.route("/add").post(gestionColis.add_gestionColis);

router.route("/findOnen/:_id").get(gestionColis.find_one_gestionColis);

router.route("/findMany").get(gestionColis.add_many_gestionColis);

router.route("/updateOne/:_id").put(gestionColis.update_one_gestionColis);

router.route("/deleteOne/:_id").delete(gestionColis.delete_one_gestionColis);

router.route("/findAll").get(gestionColis.find_all_gestionColis);

module.exports = router;
