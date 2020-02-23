import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import PollAPI from '../../utils/PollAPI'
import './Explorepage.css'
import avatar from '../../images/Avatar.svg'
import PollCard from '../PollCard'
import PollContext from '../../utils/PollContext'

const { getNewestPolls, updateOnePoll, getCategories, createComment } = PollAPI

const ExplorePageComp = _ => {
  
  const [pollState, setPollState] = useState({ 
    polls: [],
    selectedValue: '',
    searchCategory: '',
    comment: '',
    votedPolls: [],
    modalId: '',
    modal: false,
    pollId: '',
    comments: [],
    poll: ''
  })

  pollState.setPoll = poll => {
    setPollState({...pollState, poll})
  }

  pollState.setComments = comments => {
    setPollState({...pollState, comments})
  }
  
  pollState.toggle = modalId => {
    setPollState({...pollState, modalId})
    setPollState({...pollState, modal: !pollState.modal})
  }

  pollState.showPoll = e => {
    e.target.nextSibling.style.display = e.target.nextSibling.style.display === 'block' ? 'none' : 'block'
    console.log(e.target)
    e.target.textContent = e.target.textContent === 'View Poll' ? 'Hide Poll' : 'View Poll'
  }

  pollState.showComments = e => {
    e.target.nextSibling.style.display = e.target.nextSibling.style.display === 'block' ? 'none' : 'block'
    console.log(e.target)
    e.target.textContent = e.target.textContent === 'View Comments' ? 'Hide Comments' : 'View Comments'
  }

  pollState.onSelectBox = ({ target }) => {
    setPollState({ ...pollState, selectedValue: target.value })
    console.log(target.value)
  }

  pollState.handleInputChange = e => {
    setPollState({...pollState, [e.target.name]: e.target.value})
  }

  //Creates comment and adds it to the comment dispaly, incriments comment counter
  pollState.createComment = (e, pollId) => {
    e.preventDefault()
    createComment({comment: pollState.comment, user: JSON.parse(sessionStorage.getItem('userInfo')).userId, poll: pollId})
    let newComment = document.createElement('div')
    newComment.classList = 'commentCard'
    newComment.innerHTML = `
    <div class="commentCreated">
      <img class="commentAvatar" alt="User Avatar" src=${JSON.parse(sessionStorage.getItem('userInfo')).userAvatar ? JSON.parse(sessionStorage.getItem('userInfo')).userAvatar : avatar } />
      <h5 class="commentUsername">${JSON.parse(sessionStorage.getItem('userInfo')).username}</h5>
      <h6 class="commentTimeStamp">0 Minutes ago</h6>
    </div>
    <h4 class="commentCardComment">${pollState.comment}</h4> `
    document.querySelector('#poll-'+pollId + ' .pollComments').prepend(newComment)
    // Incriment Comment Counter
    let commentCount = (document.querySelector('#poll-'+pollId + ' .pollCommentsCount').textContent)
    commentCount ++
    document.querySelector('#poll-'+pollId + ' .pollCommentsCount').textContent = commentCount
 }

  // Adds poll id to local storage, updates poll with new vote , incriments vote counter
  pollState.updatePoll = e => {
    e.preventDefault() 
    let votedPolls = pollState.votedPolls
    votedPolls.push(e.target.id)
    setPollState({...pollState, votedPolls})
    let property = `votes.${pollState.selectedValue}`
    let localPolls = JSON.parse(localStorage.getItem('polls'))
    console.log(localPolls, e.target.id)
    localPolls ? localPolls.push(e.target.id) : localPolls = [e.target.id]
    localStorage.setItem('polls', JSON.stringify(localPolls))
    updateOnePoll(e.target.id, { $inc: { [property] : 1 }},
    function(err, result){
      if(err){
          console.log(err)
      }
    console.log(result)
    })
    // Incriments Vote Counter
    let voutCount = (document.querySelector('#poll-'+e.target.id + ' .pollVotesCount').textContent)
    voutCount ++
    document.querySelector('#poll-'+e.target.id + ' .pollVotesCount').textContent = voutCount
  }

  // Updates search? Honestly have no clue how this works and I wrote it -Dunsterville
  pollState.updateSearch = search => {
    console.log('in search')
    const fetchData = async () => {
      const result = await getCategories(search)
      const polls = result.data
      console.log(polls)
      setPollState({...pollState, polls})
    }
    fetchData()
  }

  // On load get polls
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNewestPolls()
      const polls = result.data
      console.log(polls)
      setPollState({...pollState, polls})
    }
    fetchData()
  },[])



  return(
    <PollContext.Provider value={pollState}>
      <NavBar updateSearch={pollState.updateSearch} />
      <PollCard />
    </PollContext.Provider>
  )
}
export default ExplorePageComp
