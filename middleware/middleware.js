var User = require('../user.js')

var middleware = {};


middleware.isLoggedIn = function(req, res, next){
                            if(req.isAuthenticated()){
                                return next();
                            }
                            res.redirect("/login");
                        }

module.exports = middleware;