const express = require("express");
const router = express.Router();

const Day = require("../models/Day");

const getMonth = require("../middleware/getMonth");
const modifyDate = require("../middleware/dateModifier");

const currentDate = new Date();

router.get("/", async (req, res) => {
  let days = await Day.find().sort({ programDay: 1 }).lean();

  console.log(
    currentDate >
      new Date(
        `${currentDate.getFullYear()}-${days[0].date
          .split(".")
          .reverse()
          .join("-")}`
      )
  );

  days.map(async (day) => {
    if (
      new Date(
        `${currentDate.getFullYear()}-${day.date
          .split(".")
          .reverse()
          .join("-")}`
      ) < currentDate
    ) {
      await Day.updateOne(
        { _id: day._id },
        {
          isPassed: true,
        }
      );
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
