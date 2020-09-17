jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { mount } from 'enzyme'

import LoginPage from '../app/components/LoginPageWithReduxHooks'


it('should show loading state', () => {

  // given
  useSelector.mockImplementation(cb => cb({ 
    loading: true, 
    error: null
  }))

  // when
  const component = mount(<LoginPage />)

  // then
  expect(component.contains('Loading...')).toBe(true)
})


it('should show error state', () => {

  // given
  useSelector.mockImplementation(cb => cb({ 
    loading: true, 
    error: { message: 'Test Error!' }
  }))

  // when
  const component = mount(<LoginPage />)

  // then
  expect(component.contains('Test Error!')).toBe(true)
})

it('should call login function', () => {

  // given
  const dispatch = jest.fn()
  useDispatch.mockImplementationOnce(() => dispatch)

  const component = mount(<LoginPage />)

  // when
  component.find('button').simulate('click')

  // then
  expect(dispatch).toBeCalled()
})