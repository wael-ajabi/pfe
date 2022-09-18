//gestionRunsheet
const mongoose = require("mongoose");
const GestionRunsheet = require("../models/gestionRunsheet");

module.exports = {
	add_gestionRunsheet: async (req, res) => {
		try {
			let gestionRunsheet = req.body;

			const savedgestionRunsheet = await GestionRunsheet.create(
				gestionRunsheet
			);
			res.send(savedgestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_gestionRunsheet: async (req, res) => {
		try {
			let gestionRunsheet = req.body.gestionRunsheet;
			const savedgestionRunsheet = await GestionRunsheet.insertMany(
				gestionRunsheet
			);
			res.send(savedgestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_gestionRunsheet: async (req, res) => {
		try {
			let id = req.params._id;
			const gestionRunsheet = await GestionRunsheet.findById(id);
			res.send(gestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_gestionRunsheet: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const gestionRunsheet = await GestionRunsheet.find({
				_id: { $in: ids },
			});
			res.send(gestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_gestionRunsheet: async (req, res) => {
		try {
			const gestionRunsheet = await GestionRunsheet.find();
			res.send(gestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_gestionRunsheet: async (req, res) => {
		try {
			let gestionRunsheet = req.body;
			let id = req.params._id;
			console.log(id, gestionRunsheet);
			const updatedgestionRunsheet =
				await GestionRunsheet.findByIdAndUpdate(id, gestionRunsheet);
			res.send(updatedgestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_gestionRunsheet: async (req, res) => {
		try {
			let id = req.params._id;
			const deletedgestionRunsheet =
				await GestionRunsheet.findByIdAndRemove(id);
			res.send(deletedgestionRunsheet);
		} catch (error) {
			res.send(error);
		}
	},
};
