module.exports = (model, Schema) => {
  const User = new Schema({
    email: String,
    username: String,
    avatar: String,
    polls: [{ type: Schema.Types.ObjectId, ref: 'Poll'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}