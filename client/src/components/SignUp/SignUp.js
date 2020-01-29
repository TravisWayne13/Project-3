import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import UserContext from '../../utils/Usercontext'
import { GoogleLogin } from 'react-google-login';
import './SignUp.css'
const SignUpComp = _ => {

const { username, email, password, taken, handleInputChange, handleFormSubmit } = useContext(UserContext)

const errorStyle = {
  border: 'solid 1px red'
}

const errorLabel = {
  display: 'block',
  color: 'red'
}

    return (
        <Container>
            <Form>
                <Jumbotron className="jumbotron" fluid>
                    <h2 className="colorSet">Sign Up</h2>
                    <p className="lead colorSet" >Please enter your information below</p>
                </Jumbotron>
                <FormGroup>
                    <Label className="colorSet">Username</Label>
                    <Input style={taken ? errorStyle : {border: '0'}} type="userName" name="username" value={username} onChange={handleInputChange} placeholder="ex. John Doe" />
                    <p style={taken ? errorLabel : {display: 'none'}}> Username is taken</p>
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Email</Label>
                    <Input type="email" name="email" value={email} onChange={handleInputChange} placeholder="ex. johndoe@gmail.com" />
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Password</Label>
                    <Input type="password" name="password" value={password} onChange={handleInputChange} placeholder="ex. password123" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block buttonStyles" onClick={handleFormSubmit}>
                    Create Account
                </Button>
                <div  className="text-center pt-3 colorSet">
                    Or continue with your google login info
                </div>
                <br />
                <GoogleLogin className="googleLink"/>
                <br />
                <br />
                <div className="text-center colorSet">
                    <p>Already Have an Account?</p>
                    <a className="bottomLink" href="/signin">Sign In</a>
                    <a href="/">Home</a>
                </div>
            </Form>
        </Container>
    )
}
export default SignUpComp