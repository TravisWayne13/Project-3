import React from 'react'
import './Menu.css'
import avatar from '../../images/Avatar.svg'
import compass from '../../images/compass.svg'
import poll from '../../images/Poll.svg'
import create from '../../images/Create.svg'
import rightChevron from '../../images/Right-Chevron.svg'
import { slide as Nav } from "react-burger-menu"

const Menu = (props) => {

  return (
    <Nav>
      <div>
        <img alt="User Avatar" src={props.userAvatar ? props.userAvatar : avatar }/>
        <h4>{props.userName}</h4>
        <p>{props.userEmail}</p>
      </div>
      <a className="menu-item" href="/explore"><img src={compass} alt="Compass icon"/><h5>Explore</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/mypolls"><img src={poll} alt="Poll icon"/><h5>My Polls</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/createpoll"><img src={create} alt="Create icon"/><h5>Create a Poll</h5><img src={rightChevron} alt="right chevron"/></a>
    </Nav>
  )
}

export default Menu