import React, { useState, useEffect } from 'react'
import './Menu.css'
import avatar from '../../images/Avatar.svg'
import compass from '../../images/compass.svg'
import poll from '../../images/Poll.svg'
import create from '../../images/Create.svg'
import rightChevron from '../../images/Right-Chevron.svg'
import { slide as Nav } from 'react-burger-menu'
import cookie from 'react-cookies'

const Menu = () => {

  const [ userState, userSetState ] = useState({
    userInfo: sessionStorage.getItem('userInfo') || '',
    username: '',
    email: '',
    userAvatar: ''
  })

  userState.logout = () => {
    sessionStorage.removeItem('userInfo')
    cookie.remove('token', { path: '/' })
  }

  useEffect(() => {
    console.log(userState)
    // Check token cookie, set initalLoad to false
    let userInfo = JSON.parse(userState.userInfo)
    userSetState({...userState,
      username: userInfo.username,
      email: userInfo.email,
      userAvatar: userInfo.userAvatar
    })
  }, [userState.userInfo])

  return (
    <Nav>
      <div className="user-avatar">
        <img alt="User Avatar" src={userState.userAvatar ? userState.userAvatar : avatar }/>
        <div className="user-info">
          <h4>{userState.username}</h4>
          <p className="email">{userState.email}</p>
        </div>
      </div>
      <a className="menu-item" href="/explore"><img src={compass} alt="Compass icon"/><h5>Explore</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/mypolls"><img src={poll} alt="Poll icon"/><h5>My Polls</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="menu-item" href="/createpoll"><img src={create} alt="Create icon"/><h5>Create a Poll</h5><img src={rightChevron} alt="right chevron"/></a>
      <a className="logout" onClick={userState.logout} href="/signin">Logout</a>
    </Nav>
  )
}

export default Menu