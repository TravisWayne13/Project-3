import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import { GoogleLogin } from 'react-google-login';
import './SignUp.css'
const SignIn = _ => {



    return (
        <Container>
            <Form>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">Sign Up</h2>
                        <p className="lead colorSet" >Please enter your information below</p>
                    </Container>
                </Jumbotron>
                <FormGroup>
                    <Label className="colorSet">Name</Label>
                    <Input type="userName" placeholder="username or email" />
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Email</Label>
                    <Input type="email" placeholder="username or email" />
                </FormGroup>
                <FormGroup>
                    <Label className="colorSet">Password</Label>
                    <Input type="password" placeholder="password" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block buttonStyles">
                    Sign Up
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
                    <a href="/sign-up">Sign In</a>
                </div>
            </Form>
        </Container>
    )
}
export default SignIn