import React, { useState } from 'react'
import SignUpComp from '../../components/SignUp'
import axios from 'axios'
import UserContext from '../../utils/Usercontext';


const SignUp = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    email: '',
    password: ''
  })

  userState.handleInputChange = e => {
    userSetState({...userState, [e.target.name]: e.target.value})
  }
  userState.handleFormSubmit = e => {
    e.preventDefault()

    axios.post('./register', {username: userState.username, email: useState.email, password: userState.password})
      .then(({data}) => {
        console.log(data)
      })
      .catch(e => console.error(e))
  }

    return(
      <UserContext.Provider value={userState}>
        <SignUpComp />
      </UserContext.Provider>
        )
       
}
export default SignUp