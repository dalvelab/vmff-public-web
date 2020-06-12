const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  res.render("albums/all");
});

module.exports = router;
