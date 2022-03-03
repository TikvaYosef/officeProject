require("dotenv").config()
const express = require("express")
require("./DB/index")
const cors = require("cors");
const employeerouting = require("./routes/employeeRoter")
const userrouter = require("./routes/userRouter")
const officeServer = express();
officeServer.use(express.json());
officeServer.use(cors());
const PORT = process.env.PORT || 5050
officeServer.listen(PORT);


const passport = require("passport");
require("./config/passport")(passport)

const path = require("path")
if (process.env.NODE_ENV === "production") {
    officeServer.use(express.static(path.join(__dirname,"../client/build")))
    officeServer.get("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build","index.html") ))
}

// officeServer.use("/employees", employeerouting)
officeServer.use("/employee", employeerouting)
officeServer.use("/postemployee", employeerouting)
officeServer.use("/updateemployee", employeerouting)
officeServer.use("/deleteemployee", employeerouting)

officeServer.use("/auth", userrouter);

officeServer.use(passport.initialize())
officeServer.use("/employees", passport.authenticate("jwt", { session: false }), employeerouting)



