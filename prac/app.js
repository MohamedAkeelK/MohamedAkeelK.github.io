const express = require("express");
const exhb = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

const db = require("./config/database");
//test connection to database job_poster
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("err: ", err));

const app = express();

const hbs = exhb.create({
  defaultLayout: "main",
  allowedProtoMethods: true,
  allowedProtoProperties: true,
});

// HandleBars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// app.set("views", "./views");

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// home route
app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

// middleware for jobs route
app.use("/jobs", require("./routes/jobs"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
