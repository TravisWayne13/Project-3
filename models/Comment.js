module.exports = (model, Schema) => {
  
  const Comment = new Schema({
    comment: { type: String, required: true },
    poll: [{ type: Schema.Types.ObjectId, ref: 'Poll'}],
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  return model('Comment', Comment)
}