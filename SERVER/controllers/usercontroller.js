

// const users = require("../modles/user")

// module.exports = {
//     register: async (req, res) => {
//         if (users.exists(req.body.email)) return res.status(400).send({ messege: "allready exists" })
//         bcrypt.hash(req.body.password, 10, (err, hashpassword) => {
//             if (err) return res.status(500).send({ messege: "error" })
//             req.body.password = hashpassword
//             await users.create(req.body)
//             .then(result => res.status(200).send({ messege: "new user", result }))
//             .catch(err => res.status(500).send(err))
//         })  
//     }
// }