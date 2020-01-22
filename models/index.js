const { model, Schema } = require('mongoose')

module.exports = {
  Poll: require('./Poll.js')(model, Schema),
  Comment: require('./Comment.js')(model, Schema)
}
