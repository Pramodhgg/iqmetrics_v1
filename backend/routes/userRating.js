const express = require("express");

const router = express.Router();

const userRatingController = require("../controllers/rating");

const chechAuth = require("../AuthorisedMidleWare/auth-check");

router.post("", chechAuth, userRatingController.addRating);

module.exports = router;



