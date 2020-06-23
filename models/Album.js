const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  albumTitle: {
    type: String,
    required: true,
  },
  albumYear: {
    type: Number,
    required: true,
  },
  albumImages: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("Album", AlbumSchema);
