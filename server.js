require('dotenv').config()

const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pollioappio@gmail.com',
    pass: 'Zotzotzotzot'
  }
})
const express = require('express')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()
const { User } = require('./models')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// userAuth
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
  .then(user => cb(null, user))
  .catch(e => cb(e))))

require('./routes')(app)

<<<<<<< HEAD
process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI
  : require('mongoose')
    .connect('mongodb://localhost:27017/polls', {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => app.listen(process.env.PORT || 2998))
    .catch(e => console.error(e))
=======
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(join(__dirname, 'client/build', 'index.html'))
  })
}

require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/polls', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(process.env.PORT || 2998))
  .catch(e => console.error(e))
>>>>>>> 650529669ba3725db1c80e0554e5681bbed3bf49
