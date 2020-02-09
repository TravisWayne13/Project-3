import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import TextField from '@material-ui/core/TextField'
import PollAPI from '../../utils/PollAPI'
import './Explorepage.css'
import commentsSvg from '../../images/comments.svg'
import votesSvg from '../../images/votes.svg'
import avatar from '../../images/Avatar.svg'
import moment from 'moment'

const { getNewestPolls } = PollAPI

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
 
  const [data, setData] = useState({ polls: [] })
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  data.showPoll = e => {
    e.target.nextSibling.style.display = 'block'
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNewestPolls()
      const polls = result.data
      console.log(polls)
      setData({polls})
    }
    fetchData()
  }, [])

  return(
      <div>
        <NavBar/>
        {data.polls.map(poll => (
          <div className="pollCard" key={poll._id}>
            <div className="pollCreated">
              <img className="pollAvatar" alt="User Avatar" src={poll.user.userAvatar ? poll.user.userAvatar : avatar } />
              <h5 className="pollUsername">{poll.user.username}</h5>
              <h6 className="pollTimeStamp">{
                (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
                }</h6>
            </div>
            <div>
              <img className="pollCommentsSvg" onClick={toggle} src={commentsSvg}/>
              <div>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    <img className="pollAvatar" alt="User Avatar" src={poll.user.userAvatar ? poll.user.userAvatar : avatar } />
                  </ModalHeader>
                  <ModalBody>
                    <form className={classes.root} noValidate autoComplete="off">
                    <ThemeProvider theme={theme}>
                    <TextField id="outlined-basic" label="Comment" variant="outlined" />
                    </ThemeProvider>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button className="post" onClick={toggle}>Post</Button>{' '}
                  </ModalFooter>
                </Modal>
               </div>
              <p className="pollCommentsCount">{Object.keys(poll.votes).reduce((sum,key)=>sum+parseFloat(poll.votes[key]||0),0)}</p>
              <img className="pollVotesSvg" src={votesSvg}/>
              <p className="pollVotesCount">{Object.keys(poll.votes).reduce((sum,key)=>sum+parseFloat(poll.votes[key]||0),0)}</p>
            </div>
            <div>
              <h4 className="pollTitle">{poll.headline}</h4>
              <a className="viewPoll" onClick={data.showPoll}>View Poll</a>
              <div className="poll">
                <form>
                  {poll.options.map(option => (
                    <p key={option}>
                      <input type="radio"  name={poll._id} value={option} />
                      <label htmlFor={option}>{option}</label>
                    </p>
                  ))}
                  <button>Vote Now</button>
                </form>
              </div>
              {(poll.imageLink !== '' ? <img className="pollImage" src={poll.imageLink} /> : null)}
            </div>
          </div>
          ))}
      </div>
  )
}
export default ExplorePageComp