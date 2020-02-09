import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Explore from './pages/ExplorePage'
import LandingPage from './pages/LandingPage'
import CreatePoll from './pages/CreatePoll'
import PollPage from './pages/PollPage'
import ResultsPage from './pages/ResultsPage'


class App extends Component {



    render() {
        return (
            <Router>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path='/explore'>
                    <Explore />
                </Route>
                <Route exact path='/createpoll'>
                    <CreatePoll />
                </Route>
                <Route exact path='/polls/:pollId'>
                    <PollPage />
                </Route>
                <Route exact path='/resultspage'>
                    <ResultsPage />
                </Route>

            </Router>



        )
    }
}

export default App