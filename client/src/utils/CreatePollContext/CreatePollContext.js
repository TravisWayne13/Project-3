import React, { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: '',
    imageLink: '',
    options: [],
    votes: [],
    handleAddOption: () => { },
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
