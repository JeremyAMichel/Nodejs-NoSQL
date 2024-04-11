const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  prix: {
    type: Number,
    required: true,
  },
  surface: {
    type: Number,
    required: true,
  },
  localisation: {
    ville: {
      type: String,
      required: true,
    },
    codePostal: {
      type: String,
      required: true,
    },
  },
  caractéristiques: {
    chambre: {
      type: Number,
      required: true,
    },
    salleDeBain: {
      type: Number,
      required: true,
    },
    balcon: {
      type: Boolean,
      required: true,
    },
    jardin: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
  },
});

// l'etape de transformation du schema en modele sert a creer des instances de donnees
// a partir du schema et d'y ajouter des comportements (methodes)
// ici nous n'ajoutons pas de comportements mais on pourrait le faire avec par exemple
// annonceSchema.methods.rateAnnonce = function() { rating code here }

// le premier argument est le nom du modele, le deuxieme est le schema
// le nom du modele est important car il sera utilise pour creer la collection dans la base de donnees
const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;
