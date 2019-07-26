import request, { getAPI } from '../utils/request'
import { put, fork, select, call, takeLatest } from 'redux-saga/effects'

import { LOAD_FLIGHTS, flightsLoaded, flightsLoadingError } from '../actions'

const API_PATH = getAPI(window.location.hostname)

export function* fetchFlights() {
  const requestUrl = `${API_PATH}/flights`

  try {
    const flights = yield call(request, requestUrl)
    yield put(flightsLoaded(flights))
  } catch (err) {
    yield put(flightsLoadingError(err))
  }
}

export function* watchFlights() {
  yield takeLatest(LOAD_FLIGHTS, fetchFlights)
}

export default [fork(watchFlights)]
