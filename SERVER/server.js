require("dotenv").config()
const express = require("express")
require("./DB")
const cors = require("cors");
const employeerouting = require("./routes/employeeRoter")
const officeServer = express();
officeServer.use(express.json())
officeServer.use(cors());
officeServer.listen(process.env.PORT || 8080);

officeServer.get("/", (req, res) => res.send("server is up"))
officeServer.use("/employees", employeerouting)

