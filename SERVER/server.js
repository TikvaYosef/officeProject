require("dotenv").config()
const express = require("express")
require("./DB")
const cors = require("cors");
const routing = require("./routes/employeeRoter")
const officeServer = express();
officeServer.use(express.json())
officeServer.use(cors());
const PORT = process.env.PORT || 8080
officeServer.listen(PORT);

officeServer.get("/", (req, res) => res.send("server is up"))
officeServer.use("/", routing)

