const { User } = require('../models')

module.exports = app => {
  app.post('./register', (req, res) => {
    const { name, email, username, } = req.body
    User
      .register(new User({ name, email, username }),
      req.body.password), e => {
        if(e) {
          console.error(e)
        }
        res.sendStatus(200)
      }
  })

  app.post('/login', (req, res) => {

  })
}