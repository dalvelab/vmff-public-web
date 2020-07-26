const express = require("express");
const router = express.Router();

const Day = require("../models/Day");

const getMonth = require('../middleware/getMonth');

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
  let monthDay = day.date;
  let monthNumber = day.date;
  if (monthDay.charAt(0) === "0") {
    monthDay = monthDay.substr(1, 1);
  } else {
    monthDay = monthDay.substr(0, 2);
  }
  if (monthNumber.charAt(3) === "0") {
    monthNumber = monthNumber.substr(4, 4);
  } else {
    monthNumber = monthNumber.substr(3, 4);
  }
  const monthName = getMonth(monthNumber);
  day.date = monthDay + ` ${monthName}, ` + `${currentDate.getFullYear()}`;
  res.render("program/program-single", {
    title: `${day.title} | Венский Фестиваль`,
    day: day,
  });
});

router.get("/pdf/:id", async (req, res) => {
  const day = await Day.findOne({ _id: req.params.id });
});

module.exports = router;
