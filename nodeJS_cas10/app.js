const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const playersApiRouter = require("./routes/players/api/player.api.route");
const playersRouter = require("./routes/players/player.route");
const clubsApiRouter = require("./routes/clubs/api/club.api.route");
const clubsRouter = require("./routes/clubs/club.route");
const coachApiRouter = require("./routes/coach/api/coach.api.route");
const coachRouter = require("./routes/coach/coach.route");
const agentsRouter = require("./routes/agent/agent.router");

const app = express();

mongoose.connect("mongodb://localhost:27017/football-app-db");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/players", playersApiRouter);
app.use("/api/clubs", clubsApiRouter);
app.use("/api/coaches", coachApiRouter);
app.use("/players", playersRouter);
app.use("/clubs", clubsRouter);
app.use("/coaches", coachRouter);
app.use("/agents", agentsRouter);

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

module.exports = app;
