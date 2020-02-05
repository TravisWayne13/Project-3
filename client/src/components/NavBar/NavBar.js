import React from 'react'
import { AppBar, IconButton }  from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../../images/logo.svg'
import Menu from '../Menu'
import './NavBar.css'

const NavBar = (props) => {


  return(
      <AppBar position="static">
      <Menu/>
      <img className="logo" src={logo}/>
      <IconButton aria-label="search" size="large" edge="end">
        <SearchIcon/>
      </IconButton>
      </AppBar>
  )
}
export default NavBar