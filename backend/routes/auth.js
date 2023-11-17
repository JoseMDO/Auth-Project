const router = require("express").Router()
const passport = require("passport")

const CLIENT_URL = "http://localhost:3000/"

router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success: false, 
        message: "Failed to log in"
    })
})
router.get("/login/success", (req,res) => {
    if (req.user) {
        console.log("user: " + req.user)
        res.status(200).json({
            success: true,
            message: "Log in Successful",
            user: req.user,
        })
    } else {
        console.log("req.user:", req.user)
    }
})

router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect(CLIENT_URL);
    });
});

router.get("/google", passport.authenticate("google", 
    { 
        scope: ["profile"],
        'session': true
    }));

router.get("/google/callback",passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router