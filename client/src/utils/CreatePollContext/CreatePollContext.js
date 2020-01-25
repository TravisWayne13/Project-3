import React, { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: '',
    options: [],
    isDropdownOpen: false,
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
