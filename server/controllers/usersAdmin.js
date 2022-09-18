const mongoose = require("mongoose");
const UsersAdmin = require("../models/usersAdmin");

module.exports = {
  add_usersAdmin: async (req, res) => {
    try {
      let usersAdmin = req.body;
      const savedusersAdmin = await UsersAdmin.create(usersAdmin);
      res.send(savedusersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_usersAdmin: async (req, res) => {
    try {
      let usersAdmin = req.body.usersAdmin;
      const savedusersAdmin = await UsersAdmin.insertMany(usersAdmin);
      res.send(savedusersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_usersAdmin: async (req, res) => {
    try {
      let id = req.params._id;
      const usersAdmin = await UsersAdmin.findById(id);
      res.send(usersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_usersAdmin: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const usersAdmin = await UsersAdmin.find({
        _id: { $in: ids },
      });
      res.send(usersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_usersAdmin: async (req, res) => {
    try {
      const usersAdmin = await UsersAdmin.find();
      res.send(usersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_usersAdmin: async (req, res) => {
    try {
      let usersAdmin = req.body;
      let id = req.params._id;
      const updatedusersAdmin = await UsersAdmin.findByIdAndUpdate(id, usersAdmin);
      res.send(updatedusersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_usersAdmin: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedusersAdmin = await UsersAdmin.findByIdAndRemove(id);
      res.send(deletedusersAdmin);
    } catch (error) {
      res.send(error);
    }
  },
};
