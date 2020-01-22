module.exports = (model, Schema) => {
  
  const Poll = new Schema({
    headline: { type: String, required: true },
    category: { type: String, required: true },
    options: { type: Schema.Types.Mixed, required: true },
    imageLink: String,
    votes: { type: Schema.Types.Mixed, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  return model('Poll', Poll)
}