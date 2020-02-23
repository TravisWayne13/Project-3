import React, { useContext } from 'react'
import PollContext from '../../utils/PollContext'

const Poll = props => {

  const { onSelectBox, updatePoll, votedPolls } = useContext(PollContext)
  
  return (
    <div className="poll">
      <form>
        {Array.isArray(props.value.options) && props.value.options.map(option => (
          <p key={option}>
            <input type="radio" onClick={onSelectBox} id={option} name={props.value._id} value={option} />
            <label htmlFor={option}>{option}</label>
          </p>
        ))}
        <button disabled={(localStorage.getItem('polls') && JSON.parse(localStorage.getItem('polls')).indexOf(props.value._id) >= 0) || votedPolls.indexOf(props.value._id) >= 0 ? true : false} id={props.value._id} onClick={updatePoll}>Vote Now</button>
      </form>
    </div>
  )
}

export default Poll