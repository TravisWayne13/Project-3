import React from 'react'
import PollContext from '../../utils/PollContext'

const { poll } = useContext(PollContext)

const Poll = () => {
  return (
    <form>
      {poll.options.map(option => (
        <p key={option}>
          <input type="radio" onClick={data.onSelectBox} id={option} name={poll._id} value={option} />
          <label htmlFor={option}>{option}</label>
        </p>
      ))}
      <button disabled={(localStorage.getItem('polls') && JSON.parse(localStorage.getItem('polls')).indexOf(poll._id) >= 0) || data.votedPolls.indexOf(poll._id) >= 0 ? true : false} id={poll._id} onClick={data.updatePoll}>Vote Now</button>
    </form>
  )
}

export default Poll