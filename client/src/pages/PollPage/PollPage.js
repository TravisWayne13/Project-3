import React, { useState, useEffect } from 'react'
import PollComp from '../../components/PollComp'
import Menu from '../../components/Menu'
import DisplayPollContext from '../../utils/DisplayPollContext'
import PollAPI from '../../utils/PollAPI'
import {useParams} from 'react-router-dom'

// import { get } from 'mongoose'


const PollPage = _ => {

let {urlId} = useParams()

const {updateOnePoll, getOnePoll} = PollAPI

    const [DisplayPollState, setDisplayPollState] = useState({
        id: '',
        headline: '',
        imageLink: '',
        category: '',
        options: [],
        selectedValue: '',
        votes: {},
    })

    DisplayPollState.onSelectBox = ({ target }) => {
      setDisplayPollState({ ...DisplayPollState, selectedValue: target.value })
      console.log(target.value)
    }

    DisplayPollState.updatePoll = ({ target }, req,res) => {
        console.log(DisplayPollState)
        let property = `votes.${DisplayPollState.selectedValue}`
        updateOnePoll(DisplayPollState.id, { $inc: { [property] : 1 }},
        function(err, result){
            if(err){
                console.log(err)
            }
        console.log(result)
        })

    }
  DisplayPollState.viewResults = () => {
      console.log(DisplayPollState.id)
    window.location = `/resultspage/${DisplayPollState.id}`
  }
      

useEffect(() => {
console.log(urlId)
console.log('Page Loading...')
getOnePoll(`${urlId}`)
.then(({data}) => {
console.log(data.poll)
setDisplayPollState({
id: data.poll._id,
headline: data.poll.headline,
category: data.poll.category,
options: data.poll.options,
imageLink: data.poll.imageLink,
votes: data.poll.votes,
})

})
.catch(err => {console.log(err)})
// console.log(DisplayPollState)
}
,[])
        
       





    return (

        <DisplayPollContext.Provider value={DisplayPollState}>
            <Menu />
            <PollComp />
        </DisplayPollContext.Provider>
    )

}
export default PollPage