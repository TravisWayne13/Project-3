import React, { useState } from 'react'
import SignUpComp from '../../components/SignUp'
import axios from 'axios'
import UserContext from '../../utils/Usercontext';


const SignUp = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    email: '',
    password: '',
    taken: false
  })

  userState.handleInputChange = e => {
    userSetState({...userState, [e.target.name]: e.target.value})
  }
  userState.handleFormSubmit = e => {
    e.preventDefault()

    axios.post('/api/username',{username: userState.username})
      .then(({data}) => {
        // If username isn't taken crete user
        axios.post('/api/register', {username: userState.username, email: useState.email, password: userState.password})
          .then(({data}) => {
            window.location.href = '/explore'
          })
          .catch(e => console.error(e))
        }
      )
      .catch(err => {
        if (err.response.status === 409) {
          userSetState({...userState, taken: true})
        }
      })
    }

    return(
      <UserContext.Provider value={userState}>
        <SignUpComp />
      </UserContext.Provider>
        )
       
}
export default SignUp