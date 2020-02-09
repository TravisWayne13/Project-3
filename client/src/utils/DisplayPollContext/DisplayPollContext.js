import { createContext } from 'react'

const DisplayPollContext = createContext({
    id: '',
    headline: '',
    category: '',
    imageLink: '',
    options: [],
    selectedValue: '',
    votes: '',
    onSelectBox: () => { },
    updatePoll: () => { }
})

export default DisplayPollContext
