const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  res.render("albums/all", {
    title: "Альбомы | Венский Фестиваль",
  });
});

module.exports = router;
