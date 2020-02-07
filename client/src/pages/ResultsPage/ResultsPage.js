import React, { useState, useEffect } from 'react'
import PollResults from '../../components/PollResults'
import Menu from '../../components/Menu'
import {Container} from 'reactstrap'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import axios from 'axios'
const ResultsPage = _ => {

const [resultsState, setResultsState] = useState({
optionLabels: [],
votes: [],

})

useEffect(() => {
        axios.get('/api/polls/id/5e3c5a760817bf448c20c6d0')
        .then(({data}) => {
        console.log(data)
        setResultsState({
        optionLabels: data.options,
        votes: data.votes
        })
        })
        .catch(err => {console.log(err)} )
    },[])


return (
        
        <DisplayResultsContext.Provider value={resultsState}>
        <Menu />
        <PollResults/>
        </DisplayResultsContext.Provider>
        
)

}
export default ResultsPage