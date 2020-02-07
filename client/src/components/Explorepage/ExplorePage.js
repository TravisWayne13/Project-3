import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import PollAPI from '../../utils/PollAPI'
import './Explorepage.css'
import commentsSvg from '../../images/comments.svg'
import votesSvg from '../../images/votes.svg'
import avatar from '../../images/Avatar.svg'
import moment from 'moment'

const { getNewestPolls } = PollAPI

const ExplorePageComp = _ => {

  const [data, setData] = useState({ polls: [] })

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
          <div className="pollCard">
            <div className="pollCreated">
              <img className="pollAvatar" alt="User Avatar" src={poll.user.userAvatar ? poll.user.userAvatar : avatar } />
              <h5 className="pollUsername">{poll.user.username}</h5>
              <h6 className="pollTimeStamp">{
                (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
                }</h6>
            </div>
            <div>
              <img className="pollCommentsSvg" src={commentsSvg}/>
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
                    <p>
                      <input type="radio"  name={poll._id} value={option} />
                      <label for={option}>{option}</label>
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