require("dotenv").config();
var express = require("express");
const cors = require("cors");
const { sendResponse, AppError } = require("./helpers/utils");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI;

mongoose
  .connect(mongoUri)
  .then(() => console.log("connected DB"))
  .catch((err) => console.log(err, "err connect mongoose"));

//   Error handlers
// Catch 404
app.use((req, res, next) => {
  const error = new AppError(404, "Not found", "Bad request");
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err, "ERROR");
  return sendResponse(
    res,
    err.statusCode ? err.statusCode : 500,
    false,
    null,
    { message: err.message },
    err.isOperational ? err.errorType : "Internal server error"
  );
});

module.exports = app;
