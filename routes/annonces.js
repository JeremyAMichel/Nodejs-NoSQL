const express = require("express");
const connectDatabase = require("../config/database");
const router = express.Router();
const Annonce = require("../models/annonce");
connectDatabase();

router
  .route("/")
  //LISTE ANNONCE
  .get((req, res) => {
    Annonce.find()
      .then((annonces) => {
        res.status(200).json(annonces); // 200 signifie "OK"
      })
      .catch((error) => {
        console.error("Failed to retrieve annonces:", error);
        res.status(500).json({ message: "Failed to retrieve annonces", error: error.toString() }); // 500 signifie "Internal Server Error"
      });
  })

  //AJOUT ANNONCE
  .post((req, res) => {
    Annonce.create(req.body)
      .then((annonce) => {
        res.status(201).json(annonce); // 201 signifie "Created"
      })
      .catch((error) => {
        console.error("Failed to create annonce:", error);
        res.status(500).json({ message: "Failed to create annonce" }); // 500 signifie "Internal Server Error"
      });
  });

router
  .route("/:id")
  //DETAIL ANNONCE
  .get((req, res) => {
    Annonce.findById(req.params.id)
      .then((annonce) => {
        if (!annonce) {
          return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
        } else {
          res.status(200).json(annonce); // 200 signifie "OK"
        }
      })
      .catch((error) => {
        console.error("Failed to retrieve annonce:", error);
        res.status(500).json({ message: "Failed to retrieve annonce" }); // 500 signifie "Internal Server Error"
      });
  })

  //MODIFICATION ANNONCE
  .put((req, res) => {
    Annonce.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((annonce) => {
        if (!annonce) {
          return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
        } else {
          res.status(200).json(annonce); // 200 signifie "OK"
        }
      })
      .catch((error) => {
        console.error("Failed to update annonce:", error);
        res.status(500).json({ message: "Failed to update annonce" }); // 500 signifie "Internal Server Error"
      });
  })

  //SUPPRESSION ANNONCE
  .delete((req, res) => {
    Annonce.findByIdAndDelete(req.params.id)
      .then((annonce) => {
        if (!annonce) {
          return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
        } else {
          res.status(204).json(); // 204 signifie "No Content"
        }
      })
      .catch((error) => {
        console.error("Failed to delete annonce:", error);
      });
  });

module.exports = router;
