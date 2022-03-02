const stringConection = process.env.STRINGCONECTION
const mongoose = require("mongoose")

mongoose.connect(stringConection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongoose is connect"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;