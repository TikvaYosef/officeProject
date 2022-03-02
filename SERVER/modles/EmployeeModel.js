const mongoose = require("mongoose")

const employee = new mongoose.Schema({
    firstName: String,
    lastName: { type: String, require: true },
    age: Number,

},
    { timestamps: true }
)
module.exports = mongoose.model("employee", employee)