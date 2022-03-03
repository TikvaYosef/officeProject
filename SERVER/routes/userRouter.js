
const userroute = require("express").Router();
const usreRequestHeandler = require("../controllers/usercontroller")


userroute.post("/register", usreRequestHeandler.register)
userroute.post("/login", usreRequestHeandler.login)
// userroute.post("/logout", usreRequestHeandler.logOut)




module.exports = userroute;

