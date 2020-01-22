module.exports = (model, Schema) => {
  
  const Poll = new Schema({
    comment: { type: String, required: true },
    poll: [{ type: Schema.Types.ObjectId, ref: 'Poll'}],
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  return model('Poll', Poll)
}