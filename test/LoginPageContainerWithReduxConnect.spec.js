import React from 'react'
import { mount } from 'enzyme'

import { LoginPage } from '../app/components/LoginPageContainerWithReduxConnect'


it('should show loading state', () => {

  // when
  const component = mount(<LoginPage login={() => {}} loading={true} error={null} />)

  // then
  expect(component.contains('Loading...')).toBe(true)
})


it('should show error state', () => {

  // when
  const component = mount(<LoginPage login={() => {}} loading={false} error={{ message: 'Test Error!' }} />)

  // then
  expect(component.contains('Test Error!')).toBe(true)
})


it('should call login function', () => {

  // given
  const login = jest.fn()
  const component = mount(<LoginPage login={login} />)

  // when
  component.find('button').simulate('click')

  // then
  expect(login).toBeCalled()
})