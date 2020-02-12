import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import './SignIn.css'
import UserContext from '../../utils/Usercontext'


const SignInComp = _ => {
  
  const { username,  password, loginError, handleInputChange, handleFormSubmit } = useContext(UserContext)

  const errorStyle = {
    border: 'solid 2px #FF647C'
  }

  const errorLabel = {
    marginTop: '4px',
    display: 'block',
    color: '#FF647C',
    textAlign: 'center'
  }

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">Sign In</h2>
                        <p className="lead colorSet" >Please enter your username and password</p>
                    </Container>
                </Jumbotron>
                <FormGroup>
                    <Label className="colorSet">Username</Label>
                    <Input style={loginError ? errorStyle : {border: '0'}} type="text" name="username" placeholder="ex. Myusername" value={username} onChange={handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Password</Label>
                    <Input style={loginError ? errorStyle : {border: '0'}} type="password" name="password" value={password} onChange={handleInputChange} placeholder="ex. password123" />
                </FormGroup>
                <Button type="submit" className="btn-lg btn-dark btn-block buttonStyles" onClick={handleFormSubmit}>
                    Login
                </Button>
                <p style={loginError ? errorLabel : {display: 'none'}}>Login Invalid, please try again</p>
                <br />
                <br />
                <div className="text-center colorSet">
                    <p>Need an account?</p>
                    <a className="bottomLink" href="/signup">Sign Up</a>
                    <a href="/">Home</a>
                </div>
            </Form>
        </Container>
    )
}
export default SignInComp