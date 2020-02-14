import React, { useState, useEffect } from 'react'
import SignUpComp from '../../components/SignUp'
import UserContext from '../../utils/Usercontext'
import PollAPI from '../../utils/PollAPI'
import cookie from 'react-cookies'

const { registerUser, usernameAvailable, authorize } = PollAPI

const SignUp = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    email: '',
    password: '',
    formValid: true,
    token: '',
    errors: {
      username: 'Username is required',
      email: 'Email is required',
      password: 'Password is required'
    }
  })

  userState.handleInputChange = e => {
    const { name, value } = e.target
    let errors = userState.errors
    const validEmailRegex = 
    RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/i)

    // Validation Switch
    switch (name) {
      case 'username': 
        errors.username = 
          value.length < 5 ? 'Username must be at least 5 characters' : ''
        break
      case 'email': 
        errors.email = 
          validEmailRegex.test(value) ? '' : 'Please use a valid email'
        break
      case 'password': 
        errors.password = 
          value.length < 8 ? 'Password must be at least 8 characters' : ''
        break
      default:
        break
    }

    userSetState({...userState, errors, [e.target.name]: e.target.value})
  }

  userState.handleFormSubmit = e => {
    e.preventDefault()
    
    // Check if there's errors
    let valid = true
    Object.values(userState.errors).forEach( val => val.length > 0 && (valid = false)
    )
    // If no errors continue
    if (valid) {
      let errors = userState.errors

      // Check if username is available
      usernameAvailable({username: userState.username})
        .then(({data}) => {
          // Clear username errors
          errors.username = ''
          userSetState({...userState, errors, formValid: true})
          // If username isn't taken create user
          registerUser({username: userState.username, email: userState.email, password: userState.password})
            .then(({data}) => {
              const expires = new Date()
   expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 7)
              cookie.save('token', data.token, { path: '/', expires })
              userSetState({...userState, token: cookie.load('token')})
              // Set User info in session storage
              sessionStorage.setItem('userInfo', JSON.stringify(data))
            })
            .catch(e => console.error(e))
          }
        )
        .catch(err => {
          if (err.response.status === 409) {
            errors.username = 'Username is already in use'
            userSetState({...userState, errors, formValid: false})
          }
      })    
    } else {
      userSetState({...userState, formValid: false})
    }
  }

  useEffect(() => {
    // Check token cookie
    userSetState({...userState, token: cookie.load('token')})
    // Check if user is Authorized if token exists
    if (userState.token !== '') {
      authorize(userState.token)
        .then(res => {
          console.log(res)
          //window.location.href = '/explore'
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [userState.token])

  return (
    <UserContext.Provider value={userState}>
      <SignUpComp />
    </UserContext.Provider>
  )
       
}
export default SignUp