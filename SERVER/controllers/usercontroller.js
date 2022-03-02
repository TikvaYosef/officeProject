
const users = require("../modles/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    if (users.exists(req.body.email) == true) return res.status(400).json({ messege: "allready exists" })
    bcrypt.hash(req.body.password, 10, async (err, hashpassword) => {
        if (err) return res.status(500).json({ messege: "error" })
        req.body.password = hashpassword;
        await users.create(req.body)
            .then(result => res.status(200).json({ messege: "new user" }))
            .catch(err => res.status(500).json({ err }))

    })
}
const login = async (req, res) => {
    if (users.exists(req.body.email) == false) return res.status(400).json({ message: 'Email not found' });
    try {
        const user = await users.findOne({ email: req.body.email });
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Error' });
            if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
            const token = jwt.sign({ user }, process.env.SECRETKEY, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        })
    } catch (err) {
        return res.status(500).json(err);
    }
}
module.exports = { register, login }


