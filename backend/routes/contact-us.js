const { RouterEvent } = require("@angular/router");
const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contact-us");
const { route } = require("./auth");

router.post("", contactController.saveContactQuery);
router.get("/queries", contactController.getFilteredQueries);
router.get("/allqueries", contactController.getAllQueries);
router.post("/enroll", contactController.saveEnrollData);
router.get("/getEnrolledDetails", contactController.getEnrolledDetails);

module.exports = router;
