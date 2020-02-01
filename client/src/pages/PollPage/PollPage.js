import React, { useState, useEffect } from 'react'
import PollComp from '../../components/PollComp'
import Menu from '../../components/Menu'
import DisplayPollContext from '../../utils/DisplayPollContext'
import PollAPI from '../../utils/PollAPI'
import axios from 'axios'
const PollPage = _ => {


    const [DisplayPollState, setDisplayPollState] = useState({
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
      console.log(DisplayPollState)
    }

    DisplayPollState.checkSelect = ({ target }) => {
        console.log(DisplayPollState)
      }

    useEffect(() => {
        axios.get('/api/polls/id/5e35f6de1321793b86b8e990')
        .then(({data}) => {
         setDisplayPollState({
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