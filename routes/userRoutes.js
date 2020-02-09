const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const crypto = require('crypto')

module.exports = app => {
  // Register User
  app.post('/api/register', (req, res) => {
    // Generate gravatar img link
    const hash = crypto.createHash('md5').update(req.body.email).digest("hex")
    const avatar = `https://www.gravatar.com/avatar/${hash}?s=50&d=https%3A%2F%2Fs3.amazonaws.com%2F37assets%2Fsvn%2F765-default-avatar.png`
    const { email, username, } = req.body
    User.register(new User({ email, username, avatar }),
      req.body.password, (e, user) => {
        if(e) {
          console.error(e)
        }
        res.json(user ? {
          email: user.email,
          username: user.username,
          polls: user.polls,
          comments: user.comments,
          userAvatar: user.avatar,
          userId: user._id,
          token: jwt.sign({ id: user._id },
          process.env.SECRET)
        } : user)
      })
  })

  // Login User
  app.post('/api/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if(e) {
        console.error(e)
      }

      res.json(user ? {
        email: user.email,
        username: user.username,
        polls: user.polls,
        comments: user.comments,
        userAvatar: user.avatar,
        userId: user._id,
        token: jwt.sign({ id: user._id },
        process.env.SECRET)
      } : user)
    })
  })

  // Check if username is available
  app.post('/api/username', (req,res) => {
    User.findOne({username: req.body.username})
      .then((e, user) => {
        if (e) {
          if (e.username === req.body.username) {
            res.sendStatus(409)
          } else {
            console.error(e)
          }
        } else {
          res.sendStatus(200)
        }
      })
      .catch(err => console.error(err))
  })

  // Check if user is authorized
  app.post('/api/authorize', passport.authenticate('jwt'), (req,res) => {
    res.sendStatus(200)
  })
}