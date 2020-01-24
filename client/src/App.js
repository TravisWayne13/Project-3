import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage'

class App extends Component {



    render() {
        return (
                <Router>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>    
                </Router>
           
           
        )
    }
}

export default App