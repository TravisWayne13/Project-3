import React, { useState, useEffect } from 'react'
import PollComp from '../../components/PollComp'
import Menu from '../../components/Menu'
import DisplayPollContext from '../../utils/DisplayPollContext'
import PollAPI from '../../utils/PollAPI'
import axios from 'axios'
const PollPage = _ => {

const {updateOnePoll} = PollAPI

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
        
    
    
      

    useEffect(() => {
        axios.get('/api/polls/id/5e3c5a760817bf448c20c6d0')
        .then(({data}) => {
        console.log(data)
         setDisplayPollState({
        id: data._id,
        headline: data.headline,
        category: data.category,
        options: data.options,
        imageLink: data.imageLink,
        votes: data.votes,
        })
        })
        .catch(err => {console.log(err)} )
    },[])



    return (

        <DisplayPollContext.Provider value={DisplayPollState}>
            <Menu />
            <PollComp />
        </DisplayPollContext.Provider>
    )

}
export default PollPage