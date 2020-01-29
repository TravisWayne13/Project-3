module.exports = (model, Schema) => {
  const User = new Schema({
    name: String,
    email: String,
    username: String,
    avatar: String
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}