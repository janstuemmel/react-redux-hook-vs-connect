import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './components/AppWithReduxHooks'
import AppContainer from './components/AppContainerWithReduxConnect'


// set local storage token
const localStorageMiddleware = () => next => action => {
  
  if (action.type === 'LOGIN_SUCCESS') {
    localStorage.setItem('token', action.payload)
  }
  
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('token')
  }

  return next(action)
}

// init store
const store = createStore(rootReducer, applyMiddleware(thunk, localStorageMiddleware))

// get local storage token
const localStorageToken = localStorage.getItem('token')

// set local storage token
if (localStorageToken) {
  store.dispatch({ type: 'LOGIN_SUCCESS', payload: localStorageToken })
}

ReactDOM.render(
  <Provider store={store}>
    <h3>App with redux hooks</h3>
    <App />
    <hr />
    <h3>App with redux connect</h3>
    <AppContainer />
  </Provider>, 
  document.getElementById('root')
)
