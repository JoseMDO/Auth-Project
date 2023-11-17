const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')


const GOOGLE_CLIENT_ID = "20848583384-5u1fqp9tpcvojhu3c48kjf0tnfphj2t3.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done, /* done */) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile.id)
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    console.log("SERIALIZED")
    done(null, user)
})
passport.deserializeUser((user, done) => {
    console.log("DESERIALIZED")
    done(null, user)
})