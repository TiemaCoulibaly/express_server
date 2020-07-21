const express = require("express");
const {
  response
} = require("express");
const app = express();

app.get("/", function (req, res) {

  res.send("<h2>Hello Pap !!</h2>");
});

app.get("/contact", function (req, res) {
  res.send("<p><em>Je suis Joignable</em> tiema@outlook.com</p>");
});

app.get("/about", function (req, res) {
  res.send("<h1>Mon profil</h1><br><hr><p>Je suis un tout nouveau web dev a la recherche de nouveau challenge</p>");
});

app.get("/hobby", function (req, res) {
  res.send("<h2>le sport</h2>");
});
app.listen(3000, function () {
  console.log("Le serveur a start ");
});