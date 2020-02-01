import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  loginError: false,
  formValid: true,
  errors: {
    username: '',
    email: '',
    password: ''
  },
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext