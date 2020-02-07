import React, { useState, useEffect } from 'react'
import SignInComp from '../../components/SignIn'
import UserContext from '../../utils/Usercontext'
import PollAPI from '../../utils/PollAPI'
import cookie from 'react-cookies'

const { loginUser, authorize } = PollAPI


const SignIn = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    password: '',
    token: cookie.load('token'),
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
          const expires = new Date()
   expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 7)
          cookie.save('token', data.token, { path: '/', expires })
          userSetState({...userState, token: data.token })
          // Set User info in session storage
          sessionStorage.setItem('userInfo', JSON.stringify(data))
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  useEffect(() => {
    // Check token cookie
    userSetState({...userState, token: cookie.load('token')})
    // Check if user is Authorized if token exists
    if (userState.token !== '') {
      authorize(userState.token)
        .then(res => {
          console.log(res)
          window.location.href = '/explore'
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [userState.token])

  return (
    <UserContext.Provider value={userState}>
      <SignInComp />
    </UserContext.Provider>
  )
       
}
export default SignIn