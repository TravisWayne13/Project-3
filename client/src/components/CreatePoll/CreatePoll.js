import React from 'react'
const CreatePoll = _ => {


    return(
        <>
        <div className="image">
        <img src={logo}/>
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
        <img className="image2" src={mainpic}/>
        </div>
        </>
        )
       
}
export default CreatePoll