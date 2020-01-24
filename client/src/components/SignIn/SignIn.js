import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import { GoogleLogin } from 'react-google-login';
import './SignIn.css'
const SignInComp = _ => {



    return (
        <Container>
            <Form>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">Sign In</h2>
                        <p className="lead colorSet" >Please enter your email and password</p>
                    </Container>
                </Jumbotron>
                <FormGroup>
                    <Label className="colorSet">Email</Label>
                    <Input type="email" placeholder="ex. johndoe@gmail.com" />
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Password</Label>
                    <Input type="password" placeholder="ex. password123" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block buttonStyles">
                    Login
                </Button>
                <div  className="text-center pt-3 colorSet">
                    Or continue with your google login info
                </div>
                <br />
                <GoogleLogin className="googleLink"/>
                <br />
                <br />
                <div className="text-center colorSet">
                    <p>Need an account?</p>
                    <a href="/signup">Sign Up</a>
                </div>
            </Form>
        </Container>
    )
}
export default SignInComp