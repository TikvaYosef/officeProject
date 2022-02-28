require("dotenv").config()
const express = require("express")
require("./DB")
const officeServer = express();
officeServer.listen(8080);

const route = require("./routes/employeeRoter")
const cors = require("cors");
app.use(cors());


officeServer.use("/", route)

