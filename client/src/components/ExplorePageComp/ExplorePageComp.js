import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import TextField from '@material-ui/core/TextField'
import PollAPI from '../../utils/PollAPI'
import './Explorepage.css'
import commentsSvg from '../../images/comments.svg'
import votesSvg from '../../images/votes.svg'
import avatar from '../../images/Avatar.svg'
import edit from '../../images/Edit.svg'
import moment from 'moment'

const { getNewestPolls, updateOnePoll, getCategories, createComment } = PollAPI
const ExplorePageComp = _ => {

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 310,
      },
    },
  }))
  const classes = useStyles()
  const theme = createMuiTheme({
    palette: {
      primary: deepPurple,
      secondary: {
        main: '#f44336',
      },
    },
  })
 
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [data, setData] = useState({ 
    polls: [],
    selectedValue: '',
    searchCategory: '',
    comment: '',
    votedPolls: []
   })

  data.showPoll = e => {
    e.target.nextSibling.style.display = e.target.nextSibling.style.display === 'block' ? 'none' : 'block'
    e.target.text = e.target.text === 'View Poll' ? 'Hide Poll' : 'View Poll'
  }

  data.showComments = e => {
    e.target.nextSibling.style.display = e.target.nextSibling.style.display === 'block' ? 'none' : 'block'
    e.target.text = e.target.text === 'View Comments' ? 'Hide Comments' : 'View Comments'
  }

  data.onSelectBox = ({ target }) => {
    setData({ ...data, selectedValue: target.value })
    console.log(target.value)
  }

  data.handleInputChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

 data.createComment = (e, pollId) => {
  e.preventDefault()

  createComment({comment: data.comment, user: JSON.parse(sessionStorage.getItem('userInfo')).userId, poll: pollId})

 }

  data.updatePoll = e => {
    e.preventDefault() 
    let votedPolls = data.votedPolls
    votedPolls.push(e.target.id)
    setData({...data, votedPolls})
    let property = `votes.${data.selectedValue}`
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
  }

  data.updateSearch = search => {
    console.log('in search')
    const fetchData = async () => {
      const result = await getCategories(search)
      const polls = result.data
      console.log(polls)
      setData({...data, polls})
    }
    fetchData()
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNewestPolls()
      const polls = result.data
      console.log(polls)
      setData({...data, polls})
    }
    fetchData()
  },[])



  return(
      <>
      <NavBar updateSearch={data.updateSearch} />
      {data.polls.map(poll => (
        <div key={poll._id} className="pollCard">
          <div className="pollCreated">
            <img className="pollAvatar" alt="User Avatar" src={poll.user.avatar ? poll.user.avatar : avatar } />
            <h5 className="pollUsername">{poll.user.username}</h5>
            <h6 className="pollTimeStamp">{
              (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
            }</h6>
          </div>
          <div>
            <img alt="comments" onClick={toggle} className="pollCommentsSvg" src={commentsSvg}/>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    <img className="pollAvatar" alt="User Avatar" src={poll.user.userAvatar ? poll.user.userAvatar : avatar } />
                  </ModalHeader>
                    <form className={classes.root} noValidate autoComplete="off">
                  <ModalBody>
                    <ThemeProvider theme={theme}>
                      <p>
                    <TextField id="outlined-basic" label="Comment" name="comment" variant="outlined" onChange={data.handleInputChange} value={data.comment} />
                      </p>
                    </ThemeProvider>
                    <Button className="post" type="submit" onClick={(e) => { data.createComment(e, poll._id); toggle();}}>Post</Button>
                  </ModalBody>

                    </form>
                </Modal>
               </div>
            <p className="pollCommentsCount">{poll.comments.length}</p>
            <img alt="votes" className="pollVotesSvg" src={votesSvg}/>
            <p className="pollVotesCount">{Object.keys(poll.votes).reduce((sum,key)=>sum+parseFloat(poll.votes[key]||0),0)}</p>
          </div>
          <div>
            <h4 className="pollTitle">{poll.headline}</h4>
            <button className="viewPoll" onClick={data.showPoll}>View Poll</button>
            <div className="poll">
              <form>
                {poll.options.map(option => (
                  <p key={option}>
                    <input type="radio" onClick={data.onSelectBox} id={option} name={poll._id} value={option} />
                    <label htmlFor={option}>{option}</label>
                  </p>
                ))}
                <button disabled={(localStorage.getItem('polls') && JSON.parse(localStorage.getItem('polls')).indexOf(poll._id) >= 0) || data.votedPolls.indexOf(poll._id) >= 0 ? true : false} id={poll._id} onClick={data.updatePoll}>Vote Now</button>
              </form>
            </div>
            {(poll.imageLink !== '' ? <img alt="pollImage" className="pollImage" src={poll.imageLink} /> : null)}
          </div>

          <div className="links">
          <button className="viewComments" onClick={data.showComments}>View Comments</button>
          <button className="viewComments" onClick={() => {window.location = `/resultspage/${poll.id}`}}>View Results</button>
          </div>

          <div className="pollComments">
          {poll.comments.map(comment => (
            <div key={comment._id} className="commentCard">
            {(comment.user._id === JSON.parse(sessionStorage.getItem('userInfo')).userId ? <img className="commentEdit" src={edit} alt="Edit" /> : null)}
              <div className="commentCreated">
                <img className="commentAvatar" alt="User Avatar" src={comment.user.avatar ? comment.user.userAvatar : avatar } />
                <h5 className="commentUsername">{comment.user.username}</h5>
                <h6 className="commentTimeStamp">{
                  (moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
                }</h6>
                </div>
              <h4 className="commentCardComment">{comment.comment}</h4>
            </div>
          ))}
          </div>
        </div>
      ))}
    </>
  )
}
export default ExplorePageComp
