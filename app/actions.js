
export const login = ({ username, password }) => dispatch => {

  // start request
  dispatch(loginRequest())

  // fake API call
  setTimeout(() => {
    if (username === 'foo' && password === 'bar')
      dispatch(loginSuccess('t0k3n'))
    else
      dispatch(loginFailure(new Error('wrong credentials')))
  }, 500)
}

export const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
})

export const loginSuccess = token => ({
  type: 'LOGIN_SUCCESS',
  payload: token
})

export const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  payload: error
})

export const logout = () => ({
  type: 'LOGOUT'
})