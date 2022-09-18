const express = require("express");
const usersFournis = require("../controllers/usersFournis");
const router = express.Router();

router.route("/add").post(usersFournis.add_usersFournis);

router.route("/addMany").post(usersFournis.add_many_usersFournis);

router.route("/findOne").get(usersFournis.find_one_usersFournis);

router.route("/findMany").get(usersFournis.add_many_usersFournis);

router.route("/updateOne/:_id").put(usersFournis.update_one_usersFournis);

router.route("/deleteOne/:_id").delete(usersFournis.delete_one_usersFournis);

router.route("/findAll").get(usersFournis.find_all_usersFournis);

module.exports = router;
