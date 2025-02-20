const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse the json request body
app.use(express.json());

//import routes for todo
const todoRoutes = require("./routes/todos");

//mount the todo api route for versioning 
app.use("/api/v1", todoRoutes);

//starting the server 
app.listen(PORT, () => {
    console.log("your server is running on port", PORT);
})

//connect to db
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send("<h1>This is Home page</h1>");
})