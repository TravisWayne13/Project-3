import { createContext } from 'react'

const PollContext = createContext({
  polls: [],
  selectedValue: '',
  searchCategory: '',
  comment: '',
  votedPolls: [],
  modalId: '',
  modal: false,
  pollId: '',
  comments: [],
  poll: '',
  showPoll: () => { },
  showComments: () => { },
  onSelectBox: () => { },
  createComment: () => { },
  handleInputChange: () => { },
  updatePoll: () => { },
  updateSearch: () => { }
})

export default PollContext