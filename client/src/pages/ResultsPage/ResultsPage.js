import React, { useState, useEffect } from 'react'
import PollResults from '../../components/PollResults'
import Menu from '../../components/Menu'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import axios from 'axios'
import PollAPI from '../../utils/PollAPI'

const ResultsPage = _ => {

const{getOnePoll} = PollAPI

const [resultsState, setResultsState] = useState({
optionLabels: [],
votes: {},
pollTitle: ''
})

useEffect(() => {
        getOnePoll('5e3cdb7351b20165cfe90290')
        .then(({data}) => {
        console.log(data)
        setResultsState({
        optionLabels: data.options,
        votes: data.votes,
        pollTitle : data.headline
        })
        })
        .then(() => {console.log(resultsState)})
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