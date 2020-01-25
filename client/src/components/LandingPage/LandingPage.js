import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import mainpic from '../../images/mock.png'
import {Button} from 'reactstrap'
import './LandingPage.css'
const LandingPageComp = _ => {


    return(
        <>
        <div className="image">
        <img alt="logo" src={logo}/>
        </div>
        <div className="linkContainer">
        <Link className="links" to="/signin">
            <Button className="landingBtn signInBtn" color="primary" size="lg" active>Sign In</Button>
        </Link>
        <Link className="links" to="/signup">
        <Button className="landingBtn signUpBtn" color="primary" size="lg" active>Register</Button>
        </Link>
        </div>
        <div className="image2container">
        <img className="image2" alt="backgroundImage" src={mainpic}/>
        </div>
        </>
        )
       
}
export default LandingPageComp