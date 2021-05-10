const express = require("express");

const router = express.Router()

const EventController = require("../controllers/eventController")


const chechAuth = require("../AuthorisedMidleWare/auth-check")

router.post("", chechAuth, EventController.createEVent)

router.put("/:id",chechAuth, EventController.updateEvent)

router.get("", EventController.getAllEVents);

router.get("/:id",chechAuth, EventController.getEVentByID)

router.delete("/:id",chechAuth,EventController.deleteEventByID);

module.exports = router
