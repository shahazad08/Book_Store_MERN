const express = require("express");
const userRouter = require("./app/routes/user.routes.js");

const db = require("./config/dbConnect");


const cors = require("cors");
//require("dotenv").config();

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
// app.use("/book", bookRouter);


//connecting to server
const server = app.listen(process.env.PORT, () => {
 
  console.log("Example app listening at port", process.env.PORT);
  db.dbConnection();
});

module.exports = app;