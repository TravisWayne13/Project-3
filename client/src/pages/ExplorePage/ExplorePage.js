import React, { useEffect, useContext, useState } from 'react'
import ExplorePageComp from '../../components/ExplorePage'
import PollAPI from '../../utils/PollAPI'
import cookie from 'react-cookies'
//import UserContext from '../../utils/Usercontext'

const { authorize } = PollAPI


const ExplorePage = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    password: '',
    token: cookie.load('token'),
    intitalLoad: true
  })

  useEffect(() => {
    // Check token cookie, set initalLoad to false
    userSetState({...userState, intitalLoad: false,token: cookie.load('token')})
    // If not first run, check if authorized
    if (!userState.intitalLoad) {
      authorize(userState.token)
        .then(res => {
        })
        // If not authorized, send to signin page
        .catch(err => {
          console.error(err)
          window.location.href = '/signin'
        })
    }
  }, [userState.token])

  return(
    <ExplorePageComp />
  )
       
}
export default ExplorePage