import React, { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: '',
    imageLink: '',
    options: [],
    isDropdownOpen: false,
    handleAddOption: () => { },
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
