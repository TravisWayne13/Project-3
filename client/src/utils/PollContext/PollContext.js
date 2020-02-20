import { createContext } from 'react'

const PollContext = createContext({
  polls: [],
  selectedValue: '',
  searchCategory: '',
  comment: '',
  votedPolls: [],
  modalId: '',
  showPoll: () => { },
  showComments: () => { },
  onSelectBox: () => { },
  createComment: () => { },
  handleInputChange: () => { },
  updatePoll: () => { },
  updateSearch: () => { }
})

export default PollContext