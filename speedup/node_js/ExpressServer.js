const express = require("express");

const app = express();
//creating the instance of express application

app.get("/", (req, res) => {
  res.send("<h1>Welccome ss to express server</h1>");
});

app.get("/aboutus", (req, res) => {
  res.send("<h1>Welccome to about us page express server</h1>");
});

app.get("/contactus", (req, res) => {
  res.send("<h1>Welccome to contactus us page express server</h1>");
});
app.listen(4321, () => {
  console.log("server is runnig on port 4321");
});
