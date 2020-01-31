const { Comment, Poll } = require('../models')
const passport = require('passport')

module.exports = app => {
  
  // Get all Comments (Not sure if we need this if comments are gonna be populated onto the Polls, leaving it in for testing -Michael)
  app.get('/api/comments', (req, res) => {
    Comment.find()
      .populate('poll')
      .then(comments => res.json(comments))
      .catch(err => console.error(err))
  })

  // Get Comments by Poll
  app.get('/api/comments/:id', (req, res) => {
    Comment.find({'poll': req.params.id})
      .populate('poll')
      .then(comment => res.json(comment))
      .catch(err => console.error(err))
  })

  // Post one Comment
  app.post('/api/comments', passport.authenticate('jwt', { session: false }
  ), (req, res) => {
    Comment.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Update one Comment
  app.post('/api/comments/:id', passport.authenticate('jwt', { session: false }
   ), (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Delete one Comment
  app.post('/polls/:id', passport.authenticate('jwt', { session: false }
  ), (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}