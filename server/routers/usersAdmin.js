const express = require("express");
const userAdmin = require("../controllers/usersAdmin");
const router = express.Router();

router.route("/add").post(userAdmin.add_usersAdmin);

router.route("/addMany").post(userAdmin.add_many_usersAdmin);

router.route("/findOne").get(userAdmin.find_one_usersAdmin);

router.route("/findMany").get(userAdmin.add_many_usersAdmin);

router.route("/updateOne/:_id").put(userAdmin.update_one_usersAdmin);

router.route("/deleteOne/:_id").delete(userAdmin.delete_one_usersAdmin);

router.route("/findAll").get(userAdmin.find_all_usersAdmin);

module.exports = router;
