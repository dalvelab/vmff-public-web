const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Optional (Colors in console)
const colors = require("colors");

// Optional (Output request time and code in console, works only in dev ENV)
const morgan = require("morgan");
// Dev logging middware (Morgan)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// HANDLEBARS
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// LISTEN FOR SERVER
const PORT = process.env.PORT;

const currentDate = new Date();

app.get("*", async (req, res) => {
  res.render("stubs/technical-works", {
    title: `Венский Фестиваль ${currentDate.getFullYear()}`,
  });
});

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.bold.yellow
  )
);
