import React, { useState } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import CreatePollComp from '../../components/CreatePoll'
import Menu from '../../components/Menu'
import axios from 'axios'

const CreatePoll = _ => {

    const [createPollState, setCreatePollState] = useState({
        title: '',
        imageLink: '',
        category: 'Sports',
        options: ['',''],
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

    createPollState.handleChooseCategory = ({ target }) => {
        setCreatePollState({ ...createPollState, category: target.innerText })
        console.log(target.innerText)
      
       
    }

    createPollState.handleCreatePoll = (event) => {
         event.preventDefault()
        console.log(createPollState)
        // axios.post('/api/polls', 
        // {
        //     headline: createPollState.title,
        //     category: createPollState.category,
        //     options: createPollState.options,
        //     imageLink: createPollState.imageLink,
        // })
        // .then((response) => {
        //     console.log(response)
            
        // })
        // .catch(err => {console.log(err)})
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