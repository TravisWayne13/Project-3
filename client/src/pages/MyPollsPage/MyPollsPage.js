import React, { useState, useEffect } from 'react'
import MyPollResults from '../../components/MyPollResults'
import Menu from '../../components/Menu'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import PollAPI from '../../utils/PollAPI'
import { useParams } from 'react-router-dom'
import './MyPollsPage.css'

const MyPollsPage = _ => {

  let { urlId } = useParams()

  const { getUserPolls } = PollAPI

  const [resultsState, setResultsState] = useState({
    polls: []
  })

  useEffect(() => {
    getUserPolls(JSON.parse(sessionStorage.getItem('userInfo')).userId)
      .then(({ data }) => {
        console.log(data)
        let polls = resultsState.polls
        data.forEach(poll => {
          polls.push(poll)
        })
        console.log(polls)
        setResultsState({
          ...resultsState,
          polls: polls
        })
      })
      .then(() => { console.log(resultsState) })
      .catch(err => { console.log(err) })
  }, [])


  return (

    <DisplayResultsContext.Provider value={resultsState}>
      <div className="menuContainer">
        <Menu />
      </div>
      <h2 className="myPollsH2">My Polls</h2>
      <MyPollResults />
    </DisplayResultsContext.Provider>

  )

}
export default MyPollsPage