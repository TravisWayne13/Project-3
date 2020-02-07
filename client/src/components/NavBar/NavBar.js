import React, { useState } from 'react'
import { Collapse, Button, Container } from 'reactstrap'
import { AppBar, IconButton }  from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../../images/logo.svg'
import Menu from '../Menu'
import './NavBar.css'

const NavBar = (props) => {

  const [isOpen, setIsOpen] =useState(false)

  const toggle = () => setIsOpen(!isOpen)


  return(
    <>
      <AppBar position="static">
      <Menu/>
      <img className="logo" src={logo}/>
      <IconButton aria-label="search" edge="end" onClick={toggle} style={{marginBottom: '1rem'}}>
        <SearchIcon/>
      </IconButton>
      </AppBar>
      <Collapse isOpen={isOpen}>
        <Container className="buttons">
          <div className="btnGroup">
          <Button onClick={toggle} id="category">Music</Button>
          <Button onClick={toggle} id="category">Video Games</Button>
          <Button onClick={toggle} id="category">Sports</Button>
          <Button onClick={toggle} id="category">Other</Button>
          <Button onClick={toggle} id="category">Movies</Button>
          <Button onClick={toggle} id="category">Food</Button>
          </div>
        </Container>
      </Collapse>
      </>
  )
}
export default NavBar