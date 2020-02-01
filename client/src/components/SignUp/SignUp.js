import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import UserContext from '../../utils/Usercontext'
import { GoogleLogin } from 'react-google-login';
import './SignUp.css'
const SignUpComp = _ => {

const { username, email, password, errors, formValid, handleInputChange, handleFormSubmit } = useContext(UserContext)


const errorStyle = {
  border: 'solid 2px #FF647C'
}

const errorLabel = {
  display: 'block',
  color: '#FF647C'
}

const inputBorder = {
  border: '0'
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
            <Input 
              style={(!formValid && errors.emial) ? errorStyle : {border: '0'}}
              type="text" 
              name="username" 
              value={username} 
              onChange={handleInputChange} 
              placeholder="ex. Myusername" />
            <p style={(!formValid && errors.username) ? errorLabel : {display: 'none'}}>{errors.username}</p>
          </FormGroup>
          <FormGroup>
            <Label className="colorSet">Email</Label>
            <Input 
              style={(!formValid && errors.email) ? errorStyle : {border: '0'}} 
              type="email" 
              name="email" 
              value={email} 
              onChange={handleInputChange} 
              placeholder="ex. johndoe@gmail.com" />
            <p style={(!formValid && errors.email) ? errorLabel : {display: 'none'}}>{errors.email}</p>
          </FormGroup>
          <FormGroup>
            <Label className="colorSet">Password</Label>
            <Input 
              style={(!formValid && errors.password) ? errorStyle : {border: '0'}} 
              type="password" 
              name="password" 
              value={password} 
              onChange={handleInputChange} 
              placeholder="ex. password123" />
            <p style={(!formValid && errors.password) ? errorLabel : {display: 'none'}}>{errors.password}</p>
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