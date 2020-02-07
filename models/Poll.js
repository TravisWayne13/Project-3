module.exports = (model, Schema) => {

  const Poll = new Schema({
    headline: { type: String, required: true },
    category: { type: String, required: true },
    options: { type: Schema.Types.Mixed, required: true },
    imageLink: String,
    votes: { type: Schema.Types.Mixed, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User'},
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  Poll.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'poll'
  })
  
  return model('Poll', Poll)
}


// {
//   "headline": "What kind of icecream do you like?",
//   "category": "Food",
//   "options": ["Vanilla", "Chocolate", "Strawberry"],
//   "imageLink": "testLink",
//   "votes" {"Vanilla": 0, "Chocolate": 0, "Strawberry": 0}
// }
/*
{
  "headline": "What kind of icecream do you like?",
  "category": "Food",
  "options": ["Vanilla", "Chocolate", "Strawberry"],
  "imageLink": "testLink",
  "votes": {"Vanilla": 0, "Chocolate": 0, "Strawberry": 0},
}
*/
