import { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: '',
    imageLink: '',
    options: [],
    votes: [],
    urlId: '',
    handleAddOption: () => { },
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
