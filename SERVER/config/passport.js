const jwtstrategy = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;
const users = require("../modles/user");
// const mongoose = require("mongoose");



const options = {
    secretOrKey :  process.env.SECRETKEY
}
options.jwtFromRequest = extractjwt.fromAuthHeaderAsBearerToken();

module.exports  = (passport) => {
    passport.use(
        new jwtstrategy(options, (jwt_from_payloud, done) => {
            users.findById(jwt_from_payloud.user._id )
                .then(user => {
                    if (user) done(null, user);
                    done(null, false)
                })
                .catch(err => done(err, false))
        })
    )
}
