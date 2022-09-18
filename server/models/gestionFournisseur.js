const mongoose = require("mongoose");

const gestionFournisseur = mongoose.Schema(
	{
		fournisseur_id: String,
		nom_societe: String,
		nom_fournisseur: String,
		numero_telephone: String,
		adresse_societe: String,
		date_fin_contrat: String,
	},
	{ timestamps: true, versionKey: false }
);
// "FOURNISSEUR ID",
// "NOM SOCIETE",
// "NOM FOURNISSEUR",
// "NUMERO TELEPHONE",
// "ADRESSE SOCIETE",
// "DATE FIN CONTRAT",
// "ACTION",
module.exports = mongoose.model("GestionFournisseur", gestionFournisseur);
