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
  res.render("pages/restaraunt", {
    title: "Ресторанный дворик | Венский Фестиваль",
  });
});

router.get("/children", async (req, res) => {
  res.render("pages/children", {
    title: "Фестиваль детям | Венский Фестиваль",
  });
});

router.get("/contacts", async (req, res) => {
  res.render("pages/contacts", {
    title: "Контакты | Венский Фестиваль",
  });
});

router.get("/faq", async (req, res) => {
  res.render("pages/faq", {
    title: "FAQ | Венский Фестиваль",
  });
});

module.exports = router;
