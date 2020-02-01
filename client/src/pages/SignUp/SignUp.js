import React, { useState } from 'react'
import SignUpComp from '../../components/SignUp'
import UserContext from '../../utils/Usercontext'
import PollAPI from '../../utils/PollAPI'

const { registerUser, usernameAvailable } = PollAPI

const SignUp = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    email: '',
    password: '',
    formValid: true,
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
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

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
          registerUser({username: userState.username, email: useState.email, password: userState.password})
            .then(({data}) => {
              window.location.href = '/explore'
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

  return (
    <UserContext.Provider value={userState}>
      <SignUpComp />
    </UserContext.Provider>
  )
       
}
export default SignUp