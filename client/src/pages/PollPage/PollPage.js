import React, { useState, useEffect } from 'react'
import PollComp from '../../components/PollComp'
import Menu from '../../components/Menu'
import DisplayPollContext from '../../utils/DisplayPollContext'
import PollAPI from '../../utils/PollAPI'


const PollPage = _ => {

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
        
//     userSetState({...userState, intitalLoad: false,token: cookie.load('token')})
//     // If not first run, check if authorized
//     if (!userState.intitalLoad) {
//       authorize(userState.token)
//         .then(res => {
//         })
//         // If not authorized, send to signin page
//         .catch(err => {
//           console.error(err)
//           window.location.href = '/signin'
//         })
//     }
//   }, [userState.token])
    
      

    useEffect(() => {

    async function fetchData() {
            let response = await getOnePoll('5e3cf1a99d0f1b6a5eae6e28')
            let data = await response.data;
            console.log(data);
        setDisplayPollState({
        id: data._id,
        headline: data.headline,
        category: data.category,
        options: data.options,
        imageLink: data.imageLink,
        votes: data.votes,
        })

          }
        fetchData()
        console.log(DisplayPollState)

        
       
    },[])



    return (

        <DisplayPollContext.Provider value={DisplayPollState}>
            <Menu />
            <PollComp />
        </DisplayPollContext.Provider>
    )

}
export default PollPage