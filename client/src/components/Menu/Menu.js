import React, { useContext } from 'react'
import './Menu.css'
import avatar from '../../images/Avatar.svg'
import compass from '../../images/compass.svg'
import poll from '../../images/Poll.svg'
import create from '../../images/Create.svg'
import rightChevron from '../../images/Right-Chevron.svg'
import UserContext from '../../utils/Usercontext'
import { slide as Nav } from "react-burger-menu"

const Menu = (props) => {

  let { username, email, userAvatar, logout } = useContext(UserContext) // Change to const before production

  username = 'Dunsterville' // Remove once user login is working
  email = 'mrd11895@gmail.com' // Remove once user login is working

  return (
    <Nav>
      <div className="user-avatar">
        <img alt="User Avatar" src={userAvatar ? userAvatar : avatar }/>
        <div className="user-info">
          <h4>{username}</h4>
          <p className="email">{email}</p>
        </div>
      </div>
      <a className="menu-item" href="/explore"><img src={compass} alt="Compass icon"/><h5>Explore</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/mypolls"><img src={poll} alt="Poll icon"/><h5>My Polls</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/createpoll"><img src={create} alt="Create icon"/><h5>Create a Poll</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="logout" onClick={logout}>Logout</a>
    </Nav>
  )
}

export default Menu