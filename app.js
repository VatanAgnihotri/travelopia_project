const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const queryRouter = require("./routes/querys");
const { default: mongoose } = require("mongoose");

const app = express();
const env = process.env;
const username = encodeURIComponent(env["MONGO_USERNAME"]);
const password = encodeURIComponent(env["MONGO_PASSWORD"]);
const url = `mongodb+srv://${username}:${password}@cluster0.zxpvlzm.mongodb.net/travelopia?retryWrites=true&w=majority`;
console.log("DB URL :: ", url);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use(express.static(path.join(__dirname, "./front-end/build")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/query", queryRouter);
module.exports = app;
