const monogoose = require("mongoose");

const pageSchema = new monogoose.Schema({
  slug: {
    type: String,
    unic: true,
  },
  image: {
    type: String,
  },
  images: [
    {
      type: Object,
    },
  ],
  cards: [
    {
      type: Object,
    },
  ],
  text: {
    type: String,
  },
  pageAdditional: [
    {
      type: Object,
    },
  ],
});

module.exports = monogoose.model("Page", pageSchema);
