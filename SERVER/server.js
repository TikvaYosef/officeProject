require("dotenv").config()
const express = require("express")
require("./DB")
const cors = require("cors");
const route = require("./routes/employeeRoter")
const officeServer = express();
officeServer.use(express.json())
officeServer.use(cors());
officeServer.listen(8080);

officeServer.get("/",(req,res)=>res.send("server is up"))
officeServer.use("/", route)

