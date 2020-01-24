import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class App extends Component {



    render() {
        return (
                <Router>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Router>
           
        )
    }
}

export default App