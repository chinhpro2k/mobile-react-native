/**
 * @format
 */
import 'react-native'
import React from 'react'
import App from '../src/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: jest.fn(),
  }
})

jest.mock('react-native-onesignal', () => {
  return {
    NativeEventEmitter: jest.fn(),
  }
})

jest.mock('@sentry/react-native', () => {
  return {
    init: jest.fn(),
  }
})

it('renders correctly', () => {
  renderer.create(<App />)
})
