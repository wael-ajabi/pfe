//gestionHub

const mongoose = require("mongoose");

const gestionHub = mongoose.Schema(
  {
    hub_id: Number,
    titre_hub: String,
    adresse: String,
    gouvernorat: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("GestionHub", gestionHub);
