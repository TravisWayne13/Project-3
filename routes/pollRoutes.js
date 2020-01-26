const { Poll, Comment } = require('../models')

module.exports = app => {
  
  // Get all Polls
  app.get('/api/polls', (req, res) => {
    Poll.find()
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Get Polls by Category
  app.get('/api/polls/:category', (req, res) => {
    Poll.find({'category': req.params.category})
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Get one Poll by id
  app.get('/api/polls/id/:id', (req, res) => {
    Poll.findById(req.params.id)
      .populate('comments')
      .then(poll => res.json({poll, comments: poll.comments}))
      .catch(err => console.error(err))
  })

  // Post one Poll
  app.post('/api/polls', (req, res) => {
    Poll.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Update one Poll (Used to update the votes)
  app.post('/api/polls/:id', (req, res) => {
    Poll.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Delete one Poll
  app.post('/api/polls/:id', (req, res) => {
    Poll.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}