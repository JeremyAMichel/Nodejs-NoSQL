const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

// require("dotenv").config({ path: ".env.local" });

/**
 * Configuration de mustache
 * comme moteur de template
 * pour l'extension .mustache
 */
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

/**
 * Configuration de express
 * pour récupérer les données d'un formulaire
 * et pour servir les fichiers statiques
 * (css, js, images, etc.)
 */
app.use(express.static("public"));
app.use(express.json()); // Pour le support des JSON dans le corps (body) des requêtes
app.use(express.urlencoded({ extended: true })); // Pour le support des formulaires

// Routes à ajouter ici

const annoncesRouter = require("./routes/annonces");

app.use("/", annoncesRouter);


module.exports = app;