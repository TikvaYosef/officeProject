const jwtstrategy = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;
const users = require("../modles/user")


const options = {
    secretOrKey :  process.env.SECRETKEY
}
options.jwtFromRequest = extractjwt.fromAuthHeaderAsBearerToken();

const passportfunc = (passport) => {
    passport.use(
        new jwtstrategy(options, (jwt_from_payloud, done) => {
            users.findOne({ _id: jwt_from_payloud._id })
                .then(user => {
                    if (user) done(null, user);
                    done(null, false)
                })
                .catch(err => done(err, false))
        })
    )
}
module.exports = {passportfunc};