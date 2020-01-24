import React from 'react'
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import './LandingPage.css'
const LandingPageComp = _ => {


    return(
        <>
        <div className="image">
        <img src={logo}/>
        </div>
        <Link to="/signin">Sign In</Link>
        <br/>
        <Link to="/signup">Sign Up</Link>
        </>
        )
       
}
export default LandingPageComp