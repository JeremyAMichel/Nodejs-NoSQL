const express = require("express");
const connectDatabase = require("../config/database");
const router = express.Router();
const Annonce = require("../models/annonce");
const Mongoose = require("mongoose");
connectDatabase();

router
  .route("/")
  //LISTE ANNONCE
  .get((req, res) => {
    Annonce.find()
      .then((annonces) => {
        return res.status(200).json(annonces); // 200 signifie "OK"
      })
      .catch((error) => {
        // console.error("Failed to retrieve annonces:", error);
        return res.status(500).json({
          message: "Failed to retrieve annonces",
          error: error.toString(),
        }); // 500 signifie "Internal Server Error"
      });
  })

  //AJOUT ANNONCE
  .post((req, res) => {
    Annonce.create(req.body)
      .then((annonce) => {
        return res.status(201).json(annonce); // 201 signifie "Created"
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: "Failed to create annonce", error }); // 500 signifie "Internal Server Error"
      });
  });

router
  .route("/:id")
  //DETAIL ANNONCE
  .get((req, res) => {
    try {
      // format d'id non supporté par mongoDB
      if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID" }); // 400 signifie "Bad Request"
      }
      Annonce.findById(req.params.id).then((annonce) => {
        if (!annonce) {
          return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
        } else {
          return res.status(200).json(annonce); // 200 signifie "OK"
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed to retrieve annonce",
        error: error.toString(),
      }); // 500
    }
  })

  //MODIFICATION ANNONCE
  .put((req, res) => {
    try {
      // format d'id non supporté par mongoDB
      if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID" }); // 400 signifie "Bad Request"
      }
      Annonce.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
        .then((annonce) => {
          if (!annonce) {
            return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
          } else {
            return res.status(200).json(annonce); // 200 signifie "OK"
          }
        })
        .catch((error) => {
          return res
            .status(500)
            .json({
              message: "Failed to update annonce",
              error: error.toString(),
            }); // 500
        });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to update annonce", error: error.toString() }); // 500
    }
  })

  //SUPPRESSION ANNONCE
  .delete((req, res) => {
    try {
      // format d'id non supporté par mongoDB
      if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID" }); // 400 signifie "Bad Request"
      }
      Annonce.findByIdAndDelete(req.params.id).then((annonce) => {
        if (!annonce) {
          return res.status(404).json({ message: "Annonce not found" }); // 404 signifie "Not Found"
        } else {
          return res
            .status(204)
            .json({ message: "Annonce successfully deleted" }); // 204 signifie "No Content"
        }
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to delete annonce", error: error.toString() }); // 500
    }
  });

module.exports = router;
