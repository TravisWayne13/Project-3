import axios from 'axios'
// Change out functions
const PollAPI = {
<<<<<<< HEAD
  // getItems: () => axios.get('/items'),
  // addItem: (item) => axios.post('/items', item),
  // updateItem: (id, values) => axios.put(`/items/${id}`, values),
  // deleteItem: (id) => axios.delete(`/items/${id}`)
  

  createPoll : (poll) => axios.post('/api/polls', poll)
  
=======
  // Poll Routes
  getNewestPolls: () => axios.get('/api/polls'),
  getTopPolls: () => axios.get('/api/top/polls'),
  getCategories: (category) => axios.get(`/api/polls/${category}`),
  getOnePoll: (id) => axios.delete(`/api/polls/${id}`),
  createPoll: (poll) => axios.post('/api/polls/', poll),
  updateOnePoll: (id, values) => axios.put(`/api/polls/${id}`, values),
  deleteOnePoll: (id) => axios.delete(`/api/polls/${id}`),
  // Comment Routes
  getComments: () => axios.get('/api/comments/'),
  getPollComments: (poll) => axios.get(`/api/comments/${poll}`),
  getOneComment: (id) => axios.get(`/api/comments/${id}`),
  createComment: (comment) => axios.post('/api/comments/', comment),
  deleteOneComment: (id) => axios.delete(`/api/comments/${id}`),
  // User Routes
  registerUser: (user) => axios.post('/api/register', user),
  loginUser: (user) => axios.post('/api/login', user),
  usernameAvailable: (user) => axios.post('/api/username', user)
>>>>>>> b47c97a7fdf3a059f3bf00ce30043800a96a4531
}

export default PollAPI