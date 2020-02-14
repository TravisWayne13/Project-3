import React, { useState, useEffect } from 'react'
import PollResults from '../../components/PollResults'
import Menu from '../../components/Menu'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import PollAPI from '../../utils/PollAPI'
import {useParams} from 'react-router-dom'

const ResultsPage = _ => {

let {urlId} = useParams()

const{getOnePoll} = PollAPI

const [resultsState, setResultsState] = useState({
optionLabels: [],
votes: {},
pollTitle: '',
})

useEffect(() => {
        getOnePoll(`${urlId}`)
        .then(({data}) => {
        console.log(data.poll)
        setResultsState({
        id: urlId,
        optionLabels: data.poll.options,
        votes: data.poll.votes,
        pollTitle : data.poll.headline
        })
        })
        .then(() => {console.log(resultsState)})
        .catch(err => {console.log(err)} )
    },[])


return (
        
        <DisplayResultsContext.Provider value={resultsState}>
        <PollResults/>
        </DisplayResultsContext.Provider>
        
)

}
export default ResultsPage