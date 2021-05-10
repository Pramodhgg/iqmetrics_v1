const express = require("express");

const Contact = require("../models/contact-us");
const Enroll = require("../models/enroll");

exports.saveContactQuery = (req, res, next) => {
  const contactDetails = new Contact({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    designation: req.body.designation,
    message: req.body.message,
  });

  contactDetails
    .save()
    .then((query) => {
      res.status(201).json({
        message: "Query saved successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Someting went wrong!!!",
      });
    });
};

exports.getFilteredQueries = async (req, res, next) => {
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.page;
  const pageQuery = Contact.find();
  let allQueries;
  if (pageSize && currentPage) {
    pageQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  pageQuery
    .then((document) => {
      allQueries = document;
      return Contact.count();
    })
    .then((count) => {
      res.status(200).json({
        message: "Queries fetched successfully",
        queries: allQueries,
        totalQueries: count,
      });
    });
};

exports.getAllQueries = (req, res, next) => {
  Contact.find().then((documents) => {
    res
      .status(200)
      .json({
        message: "contacts fetched successfully",
        allQueries: documents,
      })
      .catch((error) => {
        res.status(500).json({
          message: "Something went Wrong",
        });
      });
  });
};

exports.saveEnrollData = (req, res, next) => {
  const enrollDetails = new Enroll({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });

  enrollDetails
    .save()
    .then((document) => {
      console.log(`saved ${document} successfully`);
      res.status(201).json({
        message: "Enrolled successfully",
      });
    })
    .catch((error) => {
      res.send(500).json({
        message: "Something went wrong",
      });
    });
};

exports.getEnrolledDetails = (req, res, next) => {
  Enroll.find()
    .then((documents) => {
      console.log(documents);
      res.status(200).json({
        enrolledDetails: documents,
        message: "Details Fectched successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went Wrong",
      });
    });
};
