import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginPageContainer from './LoginPageContainerWithReduxConnect'
import { logout } from '../actions'

export function App({ token, logout }) {

  if (!token) {
    return <LoginPageContainer />
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
          <p>Login successfull with token: {token}</p>
          <p><button onClick={logout}>Logout</button></p>
        </Route>
      </Switch>
    </Router>
  )
}

export default connect(

  // mapStateToProps
  ({ token }) => ({ token }),

  // mapDispatchToProps
  { logout }

)(App)
