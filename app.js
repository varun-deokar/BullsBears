require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var localStrategy = require("passport-local");
var authroute = require("./auth");
var User = require("./user");
var middleware = require("./middleware/middleware");
var port = process.env.PORT || 3000;


app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

mongoose.connect(process.env.DATABASEURL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Hello World",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    next()
})

app.use(authroute);

app.get('/', (req, res) => {
    res.render('Landing/Landing')
})

app.get('/rules', (req, res) => {
    res.render('rules')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/Game', middleware.isLoggedIn, (req, res) => {
    res.render('Game')
})

app.listen(port, () => {
    console.log("Listening on port 3000")
})