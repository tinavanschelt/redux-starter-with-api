/**
 * This is the entry file for the application
 */

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './store'

import GlobalStyle from './global-styles'

import App from './containers/App'
import Airports from './containers/Airports'
import Flights from './containers/Flights'

import { Section } from './components'

const store = configureStore()

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Provider store={store}>
      <App>
        <Section>
          <Flights />
        </Section>
        <Section>
          <Airports />
        </Section>
      </App>
      <GlobalStyle />
    </Provider>,
    document.getElementById('app')
  )
})
