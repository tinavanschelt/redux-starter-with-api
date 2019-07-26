import { all } from 'redux-saga/effects'
import airports from './airportSagas'
import flights from './flightSagas'

export default function* sagas() {
  yield all([...airports, ...flights])
}
