import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Explore from './pages/ExplorePage'
import LandingPage from './pages/LandingPage'
import CreatePoll from './pages/CreatePoll'
import PollPage from './pages/PollPage'
import ResultsPage from './pages/ResultsPage'
import MyPollsPage from './pages/MyPollsPage'
import PollAPI from './utils/PollAPI'

const { authorize } = PollAPI

const App = () => {

  //console.log(authorize(JSON.parse(sessionStorage.getItem('userInfo')).token))
  const isAuthenticated = sessionStorage.getItem('userInfo') ? authorize(JSON.parse(sessionStorage.getItem('userInfo')).token) : false
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path='/pollpage/:urlId'>
          <PollPage />
        </Route>
        <Route exact path='/resultspage/:urlId'>
          <ResultsPage />
        </Route>
        {
          isAuthenticated ?
          <>
            <Route exact path='/explore'>
              <Explore />
            </Route>
            <Route exact path='/createpoll'>
              <CreatePoll />
            </Route>
            <Route exact path='/mypolls'>
              <MyPollsPage />
            </Route>
          </> : <Redirect to='/signin' />
        }
      </Switch>
    </Router>
  )
}

export default App