import React, { useState } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import CreatePollComp from '../../components/CreatePoll'
import Menu from '../../components/Menu'
import PollAPI from '../../utils/PollAPI'

const {createPoll} = PollAPI

const CreatePoll = _ => {

    const [createPollState, setCreatePollState] = useState({
        userInfo: sessionStorage.getItem('userInfo') || '',
        title: '',
        imageLink: '',
        category: '',
        options: ['',''],
        votes: [{},{}],
        isDropdownOpen: false
    })

    createPollState.handleInputChange = ({ target }) => {
        if(target.name === 'options'){
           let options = JSON.parse(JSON.stringify(createPollState.options))
           options[target.dataset.index] = target.value
            setCreatePollState({...createPollState, options})

        } else {
        setCreatePollState({ ...createPollState, [target.name]: target.value })
        
    }
}

    createPollState.handleChooseCategory = category => {
        setCreatePollState({ ...createPollState, category })
      
       
    }

    createPollState.handleCreatePoll = (event) => {
         event.preventDefault()
         const votes = {}
         for (let i = 0; i < createPollState.options.length; i++) {
             votes[createPollState.options[i]] = 0
         }
        console.log(createPollState)
        let userInfo = JSON.parse(createPollState.userInfo)
        console.log(userInfo.userId)
        createPoll({
            headline: createPollState.title,
            category: createPollState.category,
            options: createPollState.options,
            imageLink: createPollState.imageLink,
            votes: votes,
            user: userInfo.userId
        })
        .then(({data}) => {
            console.log(data)
            
        })
        .catch(err => {console.log(err)})
    }

 
    createPollState.handleCreateOption = () => {
        let options = JSON.parse(JSON.stringify(createPollState.options))
        options.push('')
        setCreatePollState({... createPollState, options})
    }

    createPollState.handleToggleDropdown = () => {
        setCreatePollState({ ...createPollState, isDropdownOpen: !createPollState.isDropdownOpen })
    }

    return (
        <CreatePollContext.Provider value={createPollState}>
            <Menu />
            <CreatePollComp />
        </CreatePollContext.Provider>
    )

}
export default CreatePoll