const mongoose = require("mongoose");
const GestionPersonnel = require("../models/gestionPersonnel");

module.exports = {
  add_gestionPersonnel: async (req, res) => {
    try {
      let gestionPersonnel = req.body;

      const savedgestionPersonnel = await GestionPersonnel.create(
        gestionPersonnel
      );
      res.send(savedgestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_gestionPersonnel: async (req, res) => {
    try {
      let gestionPersonnel = req.body.gestionPersonnel;
      const savedgestionPersonnel = await GestionPersonnel.insertMany(
        gestionPersonnel
      );
      res.send(savedgestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_gestionPersonnel: async (req, res) => {
    try {
      let id = req.params._id;
      const gestionPersonnel = await GestionPersonnel.findById(id);
      res.send(gestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_gestionPersonnel: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const gestionPersonnel = await GestionPersonnel.find({
        _id: { $in: ids },
      });
      res.send(gestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_gestionPersonnel: async (req, res) => {
    try {
      const gestionPersonnel = await GestionPersonnel.find();
      res.send(gestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_gestionPersonnel: async (req, res) => {
    try {
      let gestionPersonnel = req.body;
      let id = req.params._id;
      console.log(id, gestionPersonnel);
      const updatedgestionPersonnel = await GestionPersonnel.findByIdAndUpdate(
        id,
        gestionPersonnel
      );
      res.send(updatedgestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_gestionPersonnel: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedgestionPersonnel = await GestionPersonnel.findByIdAndRemove(
        id
      );
      res.send(deletedgestionPersonnel);
    } catch (error) {
      res.send(error);
    }
  },
};
