const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2')
const FacebookStrategy = require('passport-facebook')
const passport = require('passport')


const GOOGLE_CLIENT_ID = "20848583384-5u1fqp9tpcvojhu3c48kjf0tnfphj2t3.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "e604a0458b19b95cdfca"
const GITHUB_CLIENT_SECRET = "c32d3b7fb5dd5b0a1e671000b1e75f73fee187f6"



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


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(err, user);
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
