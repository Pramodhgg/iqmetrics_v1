const express = require("express");

const userController = require("../controllers/auth")

const router = express.Router();
const chechAuth = require("../AuthorisedMidleWare/auth-check");


router.post("/signup", userController.createUser);

router.get("/users",chechAuth, userController.getAllUsers);

router.post("/login", userController.userLogin)

module.exports = router;