//gestionColis
const mongoose = require("mongoose");

const gestionColis = mongoose.Schema(
	{
		code_a_bare: Number,
		nom_du_client: String,
		numero_telephone: String,
		date_de_creation: String,
		code: String,
		etat:String,
		service: String,
		
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("GestionColis", gestionColis);
