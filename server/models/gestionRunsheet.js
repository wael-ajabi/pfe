//gestionRunsheet
const mongoose = require("mongoose");

const gestionRunsheet = mongoose.Schema(
	{
		code_a_bare: String,
		nom_du_livreur: String,
		date_de_creation: String,
		etat_debrief: String,
		prix_total: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("GestionRunsheet", gestionRunsheet);
