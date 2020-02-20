import React from 'react'
import commentsSvg from '../../images/comments.svg'
import votesSvg from '../../images/votes.svg'
import avatar from '../../images/Avatar.svg'
import moment from 'moment'
import CommentCard from '../CommentCard'
import CommentModal from '../CommentModal'
import Poll from '../Poll'
import PollContext from '../../utils/PollContext'

const { polls } = useContext(PollContext)

const PollCard = () => {

  return (
    polls.map(poll => (
      <div key={poll._id} id={'poll-' + poll._id} className="pollCard">
        <div className="pollCreated">
          <img className="pollAvatar" alt="User Avatar" src={poll.user.avatar ? poll.user.avatar : avatar} />
          <h5 className="pollUsername">{poll.user.username}</h5>
          <h6 className="pollTimeStamp">{
            (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(poll.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
          }</h6>
        </div>
        <div>
          <img alt="comments" onClick={() => toggle(poll._id)} className="pollCommentsSvg" src={commentsSvg} />
          <CommentModal />
          <p className="pollCommentsCount">{poll.comments.length}</p>
          <img alt="votes" className="pollVotesSvg" src={votesSvg} />
          <p className="pollVotesCount">{Object.keys(poll.votes).reduce((sum, key) => sum + parseFloat(poll.votes[key] || 0), 0)}</p>
        </div>
        <div>
          <h4 className="pollTitle">{poll.headline}</h4>
          <button className="viewPoll" onClick={data.showPoll}>View Poll</button>
          <Poll className="poll" />
          {(poll.imageLink !== '' ? <img alt="pollImage" className="pollImage" src={poll.imageLink} /> : null)}
        </div>
        <button className="viewResults" onClick={() => { window.location = `/resultspage/${poll.id}` }}>View Results</button>
        <button className="viewComments" onClick={data.showComments}>View Comments</button>
        <CommentCard className="pollComments" />
      </div>
    ))
  )
}

export default PollCard