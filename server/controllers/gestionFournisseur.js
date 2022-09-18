const mongoose = require("mongoose");
const GestionFournisseur = require("../models/gestionFournisseur");

module.exports = {
	add_gestionFournisseur: async (req, res) => {
		try {
			let gestionFournisseur = req.body;

			const savedgestionFournisseur = await GestionFournisseur.create(
				gestionFournisseur
			);
			res.send(savedgestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_gestionFournisseur: async (req, res) => {
		try {
			let gestionFournisseur = req.body.gestionFournisseur;
			const savedgestionFournisseur = await GestionFournisseur.insertMany(
				gestionFournisseur
			);
			res.send(savedgestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_gestionFournisseur: async (req, res) => {
		try {
			let id = req.params._id;
			const gestionFournisseur = await GestionFournisseur.findById(id);
			res.send(gestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_gestionFournisseur: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const gestionFournisseur = await GestionFournisseur.find({
				_id: { $in: ids },
			});
			res.send(gestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_gestionFournisseur: async (req, res) => {
		try {
			const gestionFournisseur = await GestionFournisseur.find();
			res.send(gestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_gestionFournisseur: async (req, res) => {
		try {
			let gestionFournisseur = req.body;
			let id = req.params._id;
			console.log(id, gestionFournisseur);
			const updatedgestionFournisseur =
				await GestionFournisseur.findByIdAndUpdate(id, gestionFournisseur);
			res.send(updatedgestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_gestionFournisseur: async (req, res) => {
		try {
			let id = req.params._id;
			const deletedgestionFournisseur =
				await GestionFournisseur.findByIdAndRemove(id);
			res.send(deletedgestionFournisseur);
		} catch (error) {
			res.send(error);
		}
	},
};
