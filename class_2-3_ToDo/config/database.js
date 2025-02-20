const mongoose = require("mongoose");
require("dotenv").config();

// if u want to use process.env to access .env file we have to use dotenv module
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected successful");
    })
    .catch((err) => {
      console.log("error in connecting DB");
      console.log(err);
      process.exit(1);
    });
};

module.exports = dbConnect;