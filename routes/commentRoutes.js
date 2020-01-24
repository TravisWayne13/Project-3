const { Comment } = require('../models')

module.exports = app => {
  
  // Get all Comments (Not sure if we need this if comments are gonna be populated onto the Polls, leaving it in for testing -Michael)
  app.get('/comments', (req, res) => {
    Comment.find()
      .populate('poll')
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Post one Comment
  app.post('/comments', (req, res) => {
    Comment.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Update one Comment
  app.post('/comments/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Delete one Comment
  app.post('/polls/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}