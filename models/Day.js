const mongoose = require("mongoose");

const DaySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  programDay: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isChildren: {
    type: Boolean,
    default: false,
  },
  isPassed: {
    type: Boolean,
    default: false,
  },
});

DaySchema.pre("save", function (next) {
  this.date = this.date
    .split("-")
    .reverse()
    .splice(0, 2)
    .toString()
    .replace(",", ".");
  next();
});

module.exports = mongoose.model("Day", DaySchema);
