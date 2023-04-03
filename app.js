'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;


app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
app.get('/', (req, res) => {

  res.render('home');
});

app.get("/setCookie/:color", (req,res) => {
  console.log("setting cookie", req.params.color);
  res.cookie("setting cookie", req.params.color);
  res.send("setting cookie");
});

app.get("/getCookie", (req,res) => {
  console.log("Cookies: ", req.cookies);
  res.send("Color cookie value: " + req.cookies.color);
})

app.get("/deleteCookie", (req,res) => {
  res.clearCookie("color");
  res.send("Color cookie deleted");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
