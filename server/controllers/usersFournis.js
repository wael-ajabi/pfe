const mongoose = require("mongoose");
const UsersFournis = require("../models/usersFournis");

module.exports = {
  add_usersFournis: async (req, res) => {
    try {
      let usersFournis = req.body;
      const savedusersFournis = await UsersFournis.create(usersFournis);
      res.send(savedusersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_usersFournis: async (req, res) => {
    try {
      let usersFournis = req.body.usersFournis;
      const savedusersFournis = await UsersFournis.insertMany(usersFournis);
      res.send(savedusersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_usersFournis: async (req, res) => {
    try {
      let id = req.params._id;
      const usersFournis = await UsersFournis.findById(id);
      res.send(usersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_usersFournis: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const usersFournis = await UsersFournis.find({
        _id: { $in: ids },
      });
      res.send(usersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_usersFournis: async (req, res) => {
    try {
      const usersFournis = await UsersFournis.find();
      res.send(usersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_usersFournis: async (req, res) => {
    try {
      let usersFournis = req.body;
      let id = req.params._id;
      const updatedusersFournis = await UsersFournis.findByIdAndUpdate(
        id,
        usersFournis
      );
      res.send(updatedusersFournis);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_usersFournis: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedusersFournis = await UsersFournis.findByIdAndRemove(id);
      res.send(deletedusersFournis);
    } catch (error) {
      res.send(error);
    }
  },
};
