const { model, Schema } = require('mongoose')

const Poll = require('./Poll.js')(model, Schema)
const Comment = require('./Comment.js')(model, Schema)

module.exports = { Poll, Comment }
