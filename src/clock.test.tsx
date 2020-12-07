import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import * as Enzyme from 'enzyme'

describe('Clock', () => {
  it('is truthy', () => {
    expect(Clock).toBeTruthy()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Clock hours = {11} minutes = {33} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('clock displays correct time', () => {
      const wrapper = Enzyme.shallow(<Clock hours = {11} minutes = {33} />)
      expect(wrapper.find('h1').html()).toMatch(/11:33/) 
  })
  test('this test should fail', () => {
    const wrapper = Enzyme.shallow(<Clock hours = {11} minutes = {34} />)
    expect(wrapper.find('h1').html()).toMatch(/11:33/) 
})
})

