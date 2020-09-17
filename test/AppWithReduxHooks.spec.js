jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { mount, shallow } from 'enzyme'

import App from '../app/components/AppWithReduxHooks'
import LoginPage from '../app/components/LoginPageWithReduxHooks'

it('should render App after login', () => {

  // given
  useSelector.mockImplementationOnce(cb => cb({ token: 'test_token' }))
  useDispatch.mockImplementationOnce(() => {})

  // when
  const component = mount(<App />)

  // then
  expect(component.contains(<p>Login successfull with token: test_token</p>)).toBe(true)
})


it('should render App before login', () => {

  // given
  useSelector.mockImplementationOnce(cb => cb({ token: null }))

  // when
  const component = mount(<App />)

  // then
  expect(component.contains(<LoginPage />)).toBe(true)
})


it('should call logout', () => {

  // given
  const dispatch = jest.fn()
  useSelector.mockImplementationOnce(cb => cb({ token: 'test_token' }))
  useDispatch.mockImplementationOnce(() => dispatch)
  
  const component = mount(<App />)

  // when
  component.find('button').simulate('click')

  // then
  expect(dispatch).toHaveBeenCalled()
})