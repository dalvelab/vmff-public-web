const express = require("express");
const router = express.Router();

const Day = require("../models/Day");
const Page = require("../models/Page");

router.get("/", async (req, res) => {
  const page = await Page.findOne({ slug: "welcome" }).lean();
  const images = page.images;
  const image = page.image;
  const cards = page.cards;
  const organizators = page.pageAdditional.filter(
    (card) => card.cardSelect === "organizator"
  );
  const mediapartners = page.pageAdditional.filter(
    (card) => card.cardSelect === "mediapartner"
  );
  const supporters = page.pageAdditional.filter(
    (card) => card.cardSelect === "supporter"
  );
  const sponsors = page.pageAdditional.filter(
    (card) => card.cardSelect === "sponsor"
  );
  const currentDate = new Date();
  res.render("pages/welcome", {
    title: `Венский Фестиваль ${currentDate.getFullYear()}`,
    images: images,
    image: image,
    cards: cards,
    organizators: organizators,
    mediapartners: mediapartners,
    supporters: supporters,
    sponsors: sponsors,
  });
});

router.get("/restaraunt", async (req, res) => {
  const page = await Page.findOne({ slug: "restaraunt" }).lean();
  const renters = page.pageAdditional;
  res.render("pages/restaraunt", {
    title: "Ресторанный дворик | Венский Фестиваль",
    page: page,
    renters: renters,
  });
});

router.get("/children", async (req, res) => {
  const days = await Day.find({ isChildren: true })
    .sort({ programDay: 1 })
    .lean();
  const page = await Page.findOne({ slug: "children" }).lean();
  res.render("pages/children", {
    title: "Фестиваль детям | Венский Фестиваль",
    days: days,
    page: page,
  });
});

router.get("/contacts", async (req, res) => {
  res.render("pages/contacts", {
    title: "Контакты | Венский Фестиваль",
  });
});

router.get("/faq", async (req, res) => {
  res.render("pages/faq", {
    title: "FAQ | Венский Фестиваль",
  });
});

module.exports = router;
