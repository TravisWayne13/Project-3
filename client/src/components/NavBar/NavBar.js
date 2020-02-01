import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Menu from '../Menu'
import './NavBar.css'

const NavBar = (props) => {


  return(
    <AppBar position="static">
      <Menu/>
    </AppBar>
  )
}
export default NavBar