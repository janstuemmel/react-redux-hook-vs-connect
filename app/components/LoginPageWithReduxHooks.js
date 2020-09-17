import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../actions'

export default function () {

  const dispatch = useDispatch()

  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function submit() {

    // fire login thunk
    dispatch(login({ username, password }))

    // clear input
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <p>
        <input 
          type="text" 
          placeholder="username" 
          value={username} 
          onChange={evt => setUsername(evt.target.value)} />
      </p>
      <p>
        <input 
          type="password" 
          placeholder="password" 
          value={password} 
          onChange={evt => setPassword(evt.target.value)} />
      </p>
      <p>
        <button onClick={submit}>Login</button>
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  )
}