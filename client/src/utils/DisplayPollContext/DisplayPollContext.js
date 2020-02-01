import React, { createContext } from 'react'

const DisplayPollContext = createContext({
    headline: '',
    category: '',
    imageLink: '',
    options: '',
    selectedValue: '',
    votes: '',
    onSelectBox : () => { },
    checkSelect : () => {}
})

export default DisplayPollContext
