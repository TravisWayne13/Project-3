const { Poll } = require('../models')

module.exports = app => {
  
  // Get all Polls
  app.get('/polls', (req, res) => {
    Poll.find()
      .populate('comments')
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Get Polls by Category
  app.get('/polls/:category', (req, res) => {
    Poll.find()
      .populate('comments')
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Get one Poll by id
  app.get('/polls/:id', (req, res) => {
    Poll.findById(req.params.id)
      .populate('comments')
      .then(poll => res.json(poll))
      .catch(err => console.error(err))
  })

  // Post one Poll
  app.post('/polls', (req, res) => {
    Poll.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Update one Poll (Used to update the votes)
  app.post('/polls/:id', (req, res) => {
    Poll.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Delete one Poll
  app.post('/polls/:id', (req, res) => {
    Poll.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}