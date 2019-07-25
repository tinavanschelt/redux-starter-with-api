import { all } from 'redux-saga/effects'
import airports from './airportSagas'

export default function* sagas() {
  yield all([...airports])
}
