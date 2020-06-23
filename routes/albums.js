const express = require("express");
const router = express.Router();

const Album = require("../models/Album");

router.get("/all", async (req, res) => {
  const albums = await Album.find().sort({ albumYear: -1 }).lean();
  res.render("albums/all", {
    title: "Альбомы | Венский Фестиваль",
    albums: albums,
  });
});

router.get("/:albumYear", async (req, res) => {
  const album = await Album.findOne({
    albumYear: req.params.albumYear,
  }).lean();
  res.render("albums/single", {
    title: album.albumTitle,
    album: album,
  });
});

module.exports = router;
