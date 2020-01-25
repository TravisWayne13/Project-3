import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext