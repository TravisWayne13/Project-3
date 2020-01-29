import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  taken: false,
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext