import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Explore from './pages/ExplorePage'
import LandingPage from './pages/LandingPage'
import CreatePoll from './pages/CreatePoll'
import PollPage from './pages/PollPage'

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
<<<<<<< HEAD
                    <Route exact path="/createpoll">  
                        <CreatePoll/>
                    </Route>
                    <Route path="/pollpage">
                        <PollPage />
                    </Route>

=======
                    <Route exact path='/explore'>
                        <Explore/>
                    </Route>    
>>>>>>> a747b53802257b9c4dfc80ac04b717c9e8fc071a
                </Router>
        
           
        )
    }
}

export default App