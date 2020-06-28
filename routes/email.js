const express = require("express");
const router = express.Router();

// Schema
const Email = require("../models/Email");
// Path Extractor Middleware
const pathExtractor = require("../middleware/pathExtractor");

router.post("/subscribe", async (req, res) => {
  const email = await Email.findOne({ email: req.body.email });
  if (email) {
    res.redirect(pathExtractor(req));
    console.log("You are already registered");
  } else {
    const newSubscriber = {
      email: req.body.email,
    };

    const subscriber = new Email(newSubscriber);
    await subscriber.save();
    res.redirect(pathExtractor(req));
  }
});

module.exports = router;
