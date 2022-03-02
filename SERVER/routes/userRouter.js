
const userroute = require("express").Router();
const register = require("../controllers/usercontroller")


userroute.post("/register", register.register)


module.exports = userroute;

