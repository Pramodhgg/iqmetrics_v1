const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const eventRoutes = require("./routes/event");
const userRoutes = require("./routes/auth");
const ratingRoutes = require("./routes/userRating");
const contactRoutes = require("./routes/contact-us");

const app = express();

mongoose
  .connect(
    "mongodb+srv://IQmetrics:IQmetrics098!@iqmetrics.quxli.mongodb.net/iqmetrics?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log("Connection failed!" + e);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/event", eventRoutes);
app.use("/api/user", userRoutes);
app.use("/api/addRating", ratingRoutes);
app.use("/api/contact-us", contactRoutes);

module.exports = app;
