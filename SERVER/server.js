require("dotenv").config()
const express = require("express")
require("./DB")
const cors = require("cors");
const route = require("./routes/employeeRoter")
const officeServer = express();
officeServer.use(express.json())
officeServer.use(cors());
const PORT = 8080 || PORT
officeServer.listen(PORT);

officeServer.get("/",(req,res)=>res.send("server is up"))
officeServer.use("/", route)

