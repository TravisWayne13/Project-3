import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

import PollComp from '../../components/PollComp'
import Menu from '../../components/Menu'
import DisplayPollContext from '../../utils/DisplayPollContext'
import PollAPI from '../../utils/PollAPI'

const PollPage = props => {

    const { updateOnePoll } = PollAPI

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

    DisplayPollState.updatePoll = ({ target }, req, res) => {
        console.log(DisplayPollState)
        let property = `votes.${DisplayPollState.selectedValue}`
        updateOnePoll(DisplayPollState.id, { $inc: { [property]: 1 } },
            function (err, result) {
                if (err) {
                    console.log(err)
                }
                console.log(result)
            })

    }




    //5e405fa1cd43ba0a25b3e198
    console.log(props);
    useEffect(() => {
        const { pollId } = props.match.params;
        axios.get(`/api/polls/id/${pollId}`)
            .then(({ data: { poll } }) => {
                console.log('Is this data right?', poll)
                setDisplayPollState({
                    id: poll._id,
                    headline: poll.headline,
                    category: poll.category,
                    options: poll.options || [],
                    imageLink: poll.imageLink,
                    votes: poll.votes,
                })
            })
            .catch(err => { console.log(err) })
    }, [])



    return (

        <DisplayPollContext.Provider value={DisplayPollState}>
            <Menu />
            <PollComp />
        </DisplayPollContext.Provider>
    )

}
export default withRouter(PollPage)