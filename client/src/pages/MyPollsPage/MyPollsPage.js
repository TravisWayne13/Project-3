import React, { useState, useEffect } from 'react'
import MyPollResults from '../../components/MyPollResults'
import Menu from '../../components/Menu'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import PollAPI from '../../utils/PollAPI'
import './MyPollsPage.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const MyPollsPage = _ => {


  const { getUserPolls, deleteOnePoll } = PollAPI

  const [resultsState, setResultsState] = useState({
    polls: [],
    linkValue: '',
    copied: false,
    
    
  })

  resultsState.handleDeletePoll = pollId => {
    confirmAlert({
      title: 'About to delete your Poll',
      message: 'Are you sure you want to do this?',
      buttons: [
        {
          label: 'Delete My Poll',
          onClick: () => {
            deleteOnePoll(pollId)
              .then(() => window.location.reload())
              .catch(err => console.error(err))
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  }

  resultsState.copyLink = () => {
    
  }

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