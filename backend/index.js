
const session = require('express-session')
const express = require("express")
const cors = require('cors')
const passportSetup = require('./passport')
const passport = require('passport')
const authRoute = require("./routes/auth")
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session(
    {
        secret: "secret-key",
        resave: false,
        saveUninitialized: false,
    }
))

app.use(passport.initialize())
// app.use(passport.authenticate('session'))
app.use(passport.session())

app.use(cors({
        origin:"http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
)

app.use("/auth", authRoute)


app.listen("8000", () => {
    console.log("server is running!")
})