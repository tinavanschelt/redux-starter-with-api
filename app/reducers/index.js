import { combineReducers } from 'redux'

import airports from './airportsReducer'
import flights from './flightsReducer'

export default combineReducers({
  airports,
  flights,
})
