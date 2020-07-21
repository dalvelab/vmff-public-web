const express = require("express");
const router = express.Router();

// Schema
const Email = require("../models/Email");
// Path Extractor Middleware
const pathExtractor = require("../middleware/pathExtractor");

router.post("/subscribe", async (req, res) => {
  const email = await Email.findOne({ email: req.body.email });
  let message;
  if (email) {
    res.redirect(pathExtractor(req));
    message = "Вы уже подписаны на рассылку";
  } else {
    const newSubscriber = {
      email: req.body.email,
    };
    message = "Спасибо за подписку на рассылку";

    const subscriber = new Email(newSubscriber);
    await subscriber.save();
    res.redirect(pathExtractor(req));
  }
});

module.exports = router;
