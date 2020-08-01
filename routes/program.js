const express = require("express");
const router = express.Router();

const Day = require("../models/Day");

const getMonth = require("../middleware/getMonth");
const modifyDate = require("../middleware/dateModifier");

const currentDate = new Date();

router.get("/", async (req, res) => {
  const days = await Day.find().sort({ programDay: 1 }).lean();
  const dateNow = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }`.split(".");
  days.forEach((day) => {
    if (modifyDate(day.date)[1] < dateNow[1]) {
      day.isPassed = true;
    } else if (modifyDate(day.date)[0] < dateNow[0]) {
      day.isPassed = true;
    }
  });
  res.render("program/program", {
    title: `Программа ${currentDate.getFullYear()} | Венский Фестиваль`,
    days: days,
    year: currentDate.getFullYear(),
  });
});

router.get("/day/:dayProgram", async (req, res) => {
  const day = await Day.findOne({ programDay: req.params.dayProgram }).lean();
  const modifiedDate = modifyDate(day.date);
  const monthName = getMonth(modifiedDate[1]);
  day.date =
    modifiedDate[0] + ` ${monthName}, ` + `${currentDate.getFullYear()}`;
  res.render("program/program-single", {
    title: `${day.title} | Венский Фестиваль`,
    day: day,
  });
});

router.get("/pdf/:id", async (req, res) => {
  const day = await Day.findOne({ _id: req.params.id });
});

module.exports = router;
