import request, { getAPI } from '../utils/request'
import { put, fork, select, call, takeLatest } from 'redux-saga/effects'

import { LOAD_AIRPORTS, airportsLoaded, airportsLoadingError } from '../actions'

const API_PATH = getAPI(window.location.hostname)

export function* fetchAirports() {
  const requestUrl = `${API_PATH}/airports`

  try {
    const airports = yield call(request, requestUrl)
    yield put(airportsLoaded(airports))
  } catch (err) {
    yield put(airportsLoadingError(err))
  }
}

export function* watchAirports() {
  yield takeLatest(LOAD_AIRPORTS, fetchAirports)
}

export default [fork(watchAirports)]
