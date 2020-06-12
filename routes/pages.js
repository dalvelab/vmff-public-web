const express = require("express");
const router = express.Router();

const Day = require("../models/Day");

router.get("/", async (req, res) => {
  const currentDate = new Date();
  res.render("pages/welcome", {
    title: `Венский Фестиваль ${currentDate.getFullYear()}`,
  });
});

router.get("/restaraunt", async (req, res) => {
  res.render("pages/restaraunt");
});

router.get("/children", async (req, res) => {
  res.render("pages/children");
});

router.get("/contacts", async (req, res) => {
  res.render("pages/contacts");
});

router.get("/faq", async (req, res) => {
  res.render("pages/faq");
});

module.exports = router;
