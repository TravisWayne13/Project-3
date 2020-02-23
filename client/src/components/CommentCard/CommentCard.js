import React, { useContext } from 'react'
import avatar from '../../images/Avatar.svg'
//import edit from '../../images/Edit.svg'
import moment from 'moment'
import PollContext from '../../utils/PollContext'

const CommentCard = props => {

  //const { comments } = useContext(PollContext)

  return (
    <div className="pollComments">
      {Array.isArray(props.value) && props.value.slice(0).reverse().map(comment => (
        <div key={comment._id} className="commentCard">
          <div className="commentCreated">
            <img className="commentAvatar" alt="User Avatar" src={comment.user.avatar ? comment.user.avatar : avatar } />
            <h5 className="commentUsername">{comment.user.username}</h5>
            <h6 className="commentTimeStamp">{
              (moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') > 60 ? (moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') > 12 ? moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY hh:mm a') : moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'hours') + ' Hours ago') : moment().diff(moment(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'minutes') + ' Minutes ago')
            }</h6>
            </div>
          <h4 className="commentCardComment">{comment.comment}</h4>
        </div>
      ))}
    </div>
  )
}

export default CommentCard