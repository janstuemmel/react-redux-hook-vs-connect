import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LoginPage from './LoginPageWithReduxHooks'
import { logout } from '../actions'

export default function() {

  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  if (!token) {
    return <LoginPage />
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
          <p>Login successfull with token: {token}</p>
          <p><button onClick={() => dispatch(logout())}>Logout</button></p>
        </Route>
      </Switch>
    </Router>
  )
}
