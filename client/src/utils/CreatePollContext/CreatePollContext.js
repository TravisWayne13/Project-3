import React, { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: '',
    imageLink: '',
    options: [],
    votes: [],
    isDropdownOpen: false,
    handleAddOption: () => { },
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
