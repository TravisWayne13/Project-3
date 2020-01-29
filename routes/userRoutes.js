const { User } = require('../models')

module.exports = app => {
  app.post('/api/register', (req, res) => {
    const { name, email, username, } = req.body
    User.register(new User({ name, email, username }),
      req.body.password, e => {
        if(e) {
          console.error(e)
        }
        res.sendStatus(200)
      })
  })

  app.post('/api/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if(e) {
        console.error(e)
      }
      res.json(user)
    })
  })

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
}