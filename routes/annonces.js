const express = require("express");
const connectDatabase = require("../config/database");
const router = express.Router();

router.get("/", (req, res) => {

    connectDatabase()
        .then(() => {
            res.render("annonces/index");

            //do things here
            
        })
        .catch((error) => {
            console.error("Failed to connect to the database:", error);
            res.render("error");
        });

    // res.render("annonces/index");
});

module.exports = router;
