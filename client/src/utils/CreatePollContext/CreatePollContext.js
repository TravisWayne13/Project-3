import React, { createContext } from 'react'

const CreatePollContext = createContext({
    title: '',
    category: 'Boom',
    options: [],
    isDropdownOpen: false,
    handleInputChange: () => { },
    handleChooseCategory: () => { },
    handleCreatePoll: () => { },
    handleCreateOption: () => { },
    handleToggleDropdown: () => { }
})

export default CreatePollContext 
