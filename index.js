const express = require("express");

const path = require("path");

const app = express();

app.set("view engine", "ejs");

// app.use(express.static('public'))

app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {
  return res.render("index");
});

// chart page 
app.get("/charts", (req, res) => {
  return res.render("charts");
});

// widget page 
app.get("/widgets", (req, res) => {
  return res.render("widgets");
});

// Table page 
app.get("/tables", (req, res) => {
  return res.render("tables");
});

// grid page 
app.get("/grid", (req, res) => {
  return res.render("grid");
});

// form / form-basic 
app.get("/form-basic", (req, res) => {
  return res.render("form-basic");
});

// form / form-wizard 
app.get("/form-wizard", (req, res) => {
  return res.render("form-wizard");
});

// pages-button 
app.get("/pages-buttons", (req, res) => {
  return res.render("pages-buttons");
});

// icon-material 
app.get("/icon-material", (req, res) => {
  return res.render("icon-material");
});

// icon-fontawesome 
app.get("/icon-fontawesome", (req, res) => {
  return res.render("icon-fontawesome");
});

// pages-elements 
app.get("/pages-elements", (req, res) => {
  return res.render("pages-elements");
});

// index2
app.get("/index2", (req, res) => {
  return res.render("index2");
});

// pages-gallery 
app.get("/pages-gallery", (req, res) => {
  return res.render("pages-gallery");
});

// pages-calendar 
app.get("/pages-calendar", (req, res) => {
  return res.render("pages-calendar");
});

// pages-invoice
app.get("/pages-invoice", (req, res) => {
  return res.render("pages-invoice");
});

// pages-invoice
app.get("/pages-invoice", (req, res) => {
  return res.render("pages-invoice");
});

// pages-chat
app.get("/pages-chat", (req, res) => {
  return res.render("pages-chat");
});

// authentication-login
app.get("/authentication-login", (req, res) => {
  return res.render("authentication-login");
});

// authentication-register
app.get("/authentication-register", (req, res) => {
  return res.render("authentication-register");
});

// error-403
app.get("/error-403", (req, res) => {
  return res.render("error-403");
});

// error-404
app.get("/error-404", (req, res) => {
  return res.render("error-404");
});

// error-405
app.get("/error-405", (req, res) => {
  return res.render("error-405");
});

// error-500
app.get("/error-500", (req, res) => {
  return res.render("error-500");
});

app.listen(8081, (err) => {
  if (err) {
    console.log("server not started  port");
    return false;
  }
  console.log("server started on port");
  return true;
});
