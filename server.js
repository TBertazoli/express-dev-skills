const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");
const skillsRouter = require("./routes/skills");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Mount middleware into the middleware/request pipeline
//app.use([starts with  path], <middleware fn>, [, <middleware fn>]

app.use(function (req, res, next) {
  console.log("Hello SEI!");
  //add a time property to the res.locals object
  //the time property will then be accessible within templates
  res.locals.time = new Date().toLocaleTimeString();
  next();
});

//Log in the terminal the HTTP request info
app.use(logger("dev"));

//Processes data sent in the body of the request, if its json
app.use(express.json());

//Processes data sent in the 'form' body of the request
//It will create a property on req.body for each <input>, <select>, <textarea> in the form
app.use(express.urlencoded({ extended: false }));

//Add a cookie property for each cookie sent in the request
app.use(cookieParser());

//Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

//The first arg is the "starts with" path
app.use("/", indexRouter);
app.use("/skills", skillsRouter);

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
