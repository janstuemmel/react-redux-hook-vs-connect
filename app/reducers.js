const initialState = {
  token: null,
  loading: false,
  error: null,
  user: {}
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'LOGIN_REQUEST':
      return { ...state, loading: true }

    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, token: action.payload }

    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload }

    case 'LOGOUT':
      return { ...state, token: null }

    default:
      return state
  }
}