const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home Page");
});

router.get("/ourservices", (req, res) => {
  res.render("Our Services");
});

router.get("/contactus", (req, res) => {
  res.render("Contact us");
});

router.get("/closed", (req, res) => {
  res.render("Closed");
});

router.get("/contactus/closed", (req, res) => {
  res.render("Closed");
});

router.get("/ourservices/closed", (req, res) => {
  res.render("Closed");
});

module.exports = router;