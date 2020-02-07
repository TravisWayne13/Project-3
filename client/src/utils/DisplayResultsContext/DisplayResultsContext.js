import React, { createContext } from 'react'

const DisplayResultsContext = createContext({
    optionLabels: [],
    votes: [],
    
})

export default DisplayResultsContext