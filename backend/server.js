const express = require("express"); //to use or include the module express from node modules

const dotenv = require("dotenv");

const arts = require("./data/arts"); //to use our created module arts or file arts.js in this file

const app = express(); //created an object of express to create api
dotenv.config(); //to use .env file

// app.listen(5000, console.log("Server started at PORT 5000"));
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started at PORT ${port}`));

// --------------Creating API's of differnt format----------
app.get("/", (req, res) => {
  res.send("API is running");
});

//to read all the data in arts array which is in arts.js file
app.get("/arts", (req, res) => {
  res.json(arts);
});

//to read specific data from entire data(arts here) by sending param in api
app.get("/arts/:id", (req, res) => {
  const art = arts.find((n) => n.id == req.params.id);
  // res.json(art);
  res.send(art);
  console.log(req.params);
}); //this will give data of particular id passed in API
