import React, { useState } from 'react'
import SignInComp from '../../components/SignIn'
import UserContext from '../../utils/Usercontext'
import PollAPI from '../../utils/PollAPI'

const { loginUser } = PollAPI


const SignIn = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    password: '',
    loginError: false,
  })

  userState.handleInputChange = e => {
    userSetState({...userState, [e.target.name]: e.target.value})
  }

  userState.handleFormSubmit = e => {
    e.preventDefault()


    loginUser({username: userState.username, password: userState.password})
      .then(({data}) => {
        if (!data) {
          userSetState({...userState, loginError: true})
        } else {
          window.location.href = '/explore'
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  return (
    <UserContext.Provider value={userState}>
      <SignInComp />
    </UserContext.Provider>
  )
       
}
export default SignIn