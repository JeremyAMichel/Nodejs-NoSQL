const express = require("express");
const app = express();

/**
 * Configuration de express
 * pour récupérer les données d'un formulaire
 * et pour servir les fichiers statiques
 * (css, js, images, etc.)
 */
app.use(express.json()); // Pour le support des JSON dans le corps (body) des requêtes
app.use(express.urlencoded({ extended: true })); // Pour le support des formulaires

// Routes à ajouter ici

const annoncesRouter = require("./routes/annonces");

app.use("/", annoncesRouter);

module.exports = app;
