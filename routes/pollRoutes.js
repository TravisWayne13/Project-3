const { Poll, Comment } = require('../models')
const passport = require('passport')

module.exports = app => {
  
  // Get all Polls, Newest first
  app.get('/api/polls', (req, res) => {
    Poll.find({}).sort({createdAt: -1})
      .then(polls => res.json(polls))
      .catch(err => console.error(err))
  })

  // Get all Polls, Top first
  app.get('/api/top/polls', (req, res) => {
    Poll.find({}).sort({'Object.keys(votes).reduce((sum,key)=>sum+parseFloat(votes[key]||0),0': -1})
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
      // .populate('comments')
      // comments: poll.comments
      .then(poll => res.json({poll}))
      .catch(err => console.error(err))
  })

  // Post one Poll
  app.post('/api/polls', (req, res) => {
    Poll.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Update one Poll (Used to update the votes)
  app.put('/api/polls/:id', (req, res) => {
    Poll.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Delete one Poll
  app.delete('/api/polls/:id', (req, res) => {
    Poll.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}