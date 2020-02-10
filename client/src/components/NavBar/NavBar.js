import React, { useState } from 'react'
import { Collapse, Button, Container } from 'reactstrap'
import { AppBar, IconButton }  from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../../images/logo.svg'
import Menu from '../Menu'
import './NavBar.css'

const NavBar = (props) => {


  const [isOpen, setIsOpen] = useState(false)

  const toggle = e => {
    setIsOpen(!isOpen)
  }


  return(
    <>
      <AppBar position="static">
      <Menu/>
      <img alt="logo" className="logo" src={logo}/>
      <IconButton aria-label="search" edge="end" onClick={toggle} style={{marginBottom: '1rem'}}>
        <SearchIcon/>
      </IconButton>
      </AppBar>
      <Collapse isOpen={isOpen}>
        <Container className="buttons">
          <div className="btnGroup">
          <Button onClick={() => {props.updateSearch('Music'); toggle()}} className="category" id="Music">Music</Button>
          <Button onClick={() => {props.updateSearch('Video Games'); toggle()}} className="category" id="Video Games">Video Games</Button>
          <Button onClick={() => {props.updateSearch('Sports'); toggle()}} className="category" id="Sports">Sports</Button>
          <Button onClick={() => {props.updateSearch('Other'); toggle()}} className="category" id="Other">Other</Button>
          <Button onClick={() => {props.updateSearch('Movies'); toggle()}} className="category" id="Movies">Movies</Button>
          <Button onClick={() => {props.updateSearch('Food'); toggle()}} className="category" id="Food">Food</Button>
          </div>
        </Container>
      </Collapse>
      </>
  )
}
export default NavBar