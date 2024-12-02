//server instantiate
const express = require("express");
const app = express();

// specifically parse JSON data & add it to request.body object
// use to parse req.body in express -> put or post
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//same
// app.use(express.json());

//activate the server on 3000 port
app.listen(3000, () => {
  console.log("server started at port no 3000");
});

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car sumbitted successfully");
});

//connecting mongoDB using mongoose by the help of ODM (object data modeling)
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/LoveClass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successful");
  })
  .catch((err) => {
    console.log(err);
  });
