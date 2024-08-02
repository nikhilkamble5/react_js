const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
// we are setting our view folder inside that we are storing our file with ejs extention

app.get("/user", (req, res) => {
  const emp = {
    id: 1,
    name: "ishika",
    email: "ishika@gmail.com",
    city: "pune",
    phone:[1234,456,78910]
  };
  res.render("user", { emp });
});

app.listen(4321);

// app.get('/user', (req, res) => {
//   const emp = {
//     id: 1,
//     name: 'ishika',
//     email: 'ishika@gmail.com',
//     city: 'pune'
//   };
//   res.render('user', { emp });
// });
