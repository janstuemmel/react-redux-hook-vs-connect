import React from 'react'
import { mount, shallow } from 'enzyme'

import { App } from '../app/components/AppContainerWithReduxConnect'
import LoginPage from '../app/components/LoginPageContainerWithReduxConnect'


it('should render App after login', () => {

  // when
  const component = mount(<App token="test_token" />)

  // then
  expect(component.contains(<p>Login successfull with token: test_token</p>)).toBe(true)
})


it('should render App before login', () => {

  // when
  const component = shallow(<App token={null} />)

  // then
  expect(component.contains(<LoginPage />)).toBe(true)
})


it('should call logout', () => {

  // given
  const logout = jest.fn()
  const component = mount(<App token="test_token" logout={logout} />)

  // when
  component.find('button').simulate('click')

  // then
  expect(logout).toHaveBeenCalled()
})