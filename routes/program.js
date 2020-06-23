const express = require("express");
const router = express.Router();

const Day = require("../models/Day");

const currentDate = new Date();

router.get("/", async (req, res) => {
  const days = await Day.find().sort({ programDay: 1 }).lean();
  res.render("program/program", {
    title: `Программа ${currentDate.getFullYear()} | Венский Фестиваль`,
    days: days,
    year: currentDate.getFullYear(),
  });
});

router.get("/day/:dayProgram", async (req, res) => {
  const day = await Day.findOne({ programDay: req.params.dayProgram }).lean();
  let monthDay = day.date.substr(1, 1);
  day.date = monthDay + " июля, " + `${currentDate.getFullYear()}`;
  res.render("program/program-single", {
    title: `${day.title} | Венский Фестиваль`,
    day: day,
  });
});

module.exports = router;
