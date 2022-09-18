const mongoose = require("mongoose");
const GestionColis = require("../models/gestionColis");

module.exports = {
	add_gestionColis: async (req, res) => {
		try {
			let gestionColis = req.body;
			const savedgestionColis = await GestionColis.create(
				gestionColis
			);
			res.send(savedgestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_gestionColis: async (req, res) => {
		try {
			let gestionColis = req.body.gestionColis;
			const savedgestionColis = await GestionColis.insertMany(
				gestionColis
			);
			res.send(savedgestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_gestionColis: async (req, res) => {
		try {
			let id = req.params._id;
			const gestionColis = await GestionColis.findById(id);
			res.send(gestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_gestionColis: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const gestionColis = await GestionColis.find({
				_id: { $in: ids },
			});
			res.send(gestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_gestionColis: async (req, res) => {
		try {
			const gestionColis = await GestionColis.find();
			res.send(gestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_gestionColis: async (req, res) => {
		try {
			let gestionColis = req.body;
			let id = req.params._id;
			console.log(id, gestionColis);
			const updatedgestionColis =
				await GestionColis.findByIdAndUpdate(id, gestionColis);
			res.send(updatedgestionColis);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_gestionColis: async (req, res) => {
		try {
			let id = req.params._id;
			const deletedgestionColis =
				await GestionColis.findByIdAndRemove(id);
			res.send(deletedgestionColis);
		} catch (error) {
			res.send(error);
		}
	},
};
