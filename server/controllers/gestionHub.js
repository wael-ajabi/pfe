//gestionHub

const mongoose = require("mongoose");
const GestionHub = require("../models/gestionHub");

module.exports = {
  add_gestionHub: async (req, res) => {
    try {
      let gestionHub = req.body;

      const savedgestionHub = await GestionHub.create(gestionHub);
      res.send(savedgestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_gestionHub: async (req, res) => {
    try {
      let gestionHub = req.body.gestionHub;
      const savedgestionHub = await GestionHub.insertMany(gestionHub);
      res.send(savedgestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_gestionHub: async (req, res) => {
    try {
      let id = req.params._id;
      const gestionHub = await GestionHub.findById(id);
      res.send(gestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_gestionHub: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const gestionHub = await GestionHub.find({
        _id: { $in: ids },
      });
      res.send(gestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_gestionHub: async (req, res) => {
    try {
      const gestionHub = await GestionHub.find();
      res.send(gestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_gestionHub: async (req, res) => {
    try {
      let gestionHub = req.body;
      let id = req.params._id;
      console.log(id, gestionHub);
      const updatedgestionHub = await GestionHub.findByIdAndUpdate(
        id,
        gestionHub
      );
      res.send(updatedgestionHub);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_gestionHub: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedgestionHub = await GestionHub.findByIdAndRemove(id);
      res.send(deletedgestionHub);
    } catch (error) {
      res.send(error);
    }
  },
};
