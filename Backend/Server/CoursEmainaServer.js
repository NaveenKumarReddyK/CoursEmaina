const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);

const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;
const dbURL = require("../DataBase/databaseUrl");
const COOKIE_AGE = 1000 * 60 * 60 * 2;

const userRouter = require("../Routes/authRoutes");
const cartRouter = require("../Routes/cartRoutes");
const productRouter = require("../Routes/productRouter");
const bookarkRouter = require("../Routes/bookmarkRoutes");
const purchRouter = require("../Routes/purchasedRoutes");
const loggedinRouter = require("../Routes/isLoggedin");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbURL.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("Successfuly connected to user database");
  })
  .catch((err) => {
    console.log("Unable to connect to database");
  });

const app = express();

const MongoDBStore = new MongoStore({
  uri: "mongodb://localhost:27017/userDatabase",
  collection: "SESSION_DB",
});

app.use(
  session({
    name: "COOKIE",
    secret: "SECRET_COOKIE",
    resave: true,
    store: MongoDBStore,
    saveUninitialized: false,
    cookie: {
      maxAge: COOKIE_AGE,
      sameSite: false,
    },
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/coursemaina/auth", userRouter);
app.use("/coursemaina/cartactions", cartRouter);
app.use("/coursemaina/product", productRouter);
app.use("/coursemaina/bookmark", bookarkRouter);
app.use("/coursemaina/purchased", purchRouter);
app.use("/coursemaina/checking", loggedinRouter);

// app.set("trust proxy", 1)

app.listen(PORT, function (err) {
  if (err) {
    console.log("Unable to connect to the port");
  } else {
    console.log("Succesfuly connected to the port");
  }
});
