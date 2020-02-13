import React, { useEffect, useState } from 'react'
import ExplorePageComp from '../../components/ExplorePageComp'
import PollAPI from '../../utils/PollAPI'
import cookie from 'react-cookies'

const { authorize } = PollAPI


const ExplorePage = _ => {

  const [ userState, userSetState, HandleFormSubmit, HandleInputChange ] = useState({
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