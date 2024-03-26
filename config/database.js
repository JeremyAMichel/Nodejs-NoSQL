const mongoose = require("mongoose");

const connectDatabase = async () => {
  // TODO: Connexion à la base de données MongoDB
  // Utilisez les variables d'environnement pour la configuration
  // et referez-vous à la documentation de Mongoose
  // Utilisez un try/catch pour gérer les erreurs et n'oublier pas d'ajouter un log pour le serveur
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDatabase;