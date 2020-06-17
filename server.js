const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Require routes
const pages = require("./routes/pages");
const program = require("./routes/program");
const albums = require("./routes/albums");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

// Connect DB
connectDB();

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
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../app_admin/public/uploads"))
);

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

// Mount routes
app.use("/", pages);
app.use("/program", program);
app.use("/albums", albums);

app.get("/qr", (req, res) => {
  res.redirect("/?utm_source=qr");
});

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.bold.yellow
  )
);
