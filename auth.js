var express = require("express");
var router = express.Router();
var User = require("./user");
var passport = require("passport");

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            res.redirect("/register");
        }
        else
            passport.authenticate("local")(req, res, function(){
                res.redirect('/');
            });
    });
});

router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
        }
);

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

module.exports = router;