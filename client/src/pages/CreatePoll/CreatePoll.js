import React, { useState } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import CreatePollComp from '../../components/CreatePoll'


const CreatePoll = _ => {

    const [createPollState, setCreatePollState] = useState({
        title: '',
        category: '',
        options: [],
        isDropdownOpen: false
    })

    createPollState.handleInputChange = ({ target }) => {
        console.log(target)
        setCreatePollState({ ...createPollState, [target.name]: target.value })
    }

    createPollState.handleChooseCategory = ({ target }) => {
        setCreatePollState({ ...createPollState, category: target.classList[0] })
    }

    createPollState.handleCreatePoll = () => {
        console.log(createPollState)
    }

    createPollState.handleCreateOption = () => {

    }

    createPollState.handleToggleDropdown = () => {
        setCreatePollState({ ...createPollState, isDropdownOpen: !createPollState.isDropdownOpen })
    }

    return (
        <CreatePollContext.Provider value={createPollState}>
            <CreatePollComp />
        </CreatePollContext.Provider>
    )

}
export default CreatePoll