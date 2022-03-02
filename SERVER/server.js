require("dotenv").config()
const express = require("express")
require("./DB/index")
const cors = require("cors");
const employeerouting = require("./routes/employeeRoter")
const userrouter = require("./routes/userRouter")
const officeServer = express();
officeServer.use(express.json());
officeServer.use(cors());
const PORT =  5050
officeServer.listen(PORT);


officeServer.get("/", (req, res) => res.send("server is up"))
officeServer.use("/employee", employeerouting)
officeServer.use("/register", userrouter);

