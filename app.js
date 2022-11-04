let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

require("dotenv").config();

const skillRouter = require("./app/skill/skill.Route");
const workRouter = require("./app/work/work.Route");
const projectRouter = require("./app/project/project.Route");

let app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const apiVersion = process.env.API_VERSION || "v1";
const preRoute = "/api/" + apiVersion;

app.use(`${preRoute}/skill`, skillRouter);
app.use(`${preRoute}/work`, workRouter);
app.use(`${preRoute}/project`, projectRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
