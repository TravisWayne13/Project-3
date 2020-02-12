import { createContext } from 'react'

const DisplayResultsContext = createContext({
    optionLabels: [],
    votes: {},
    pollTitle: '',

})

export default DisplayResultsContext