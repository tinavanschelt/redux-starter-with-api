export const LOAD_FLIGHTS = 'LOAD_FLIGHTS'
export const LOAD_FLIGHTS_SUCCESS = 'LOAD_FLIGHTS_SUCCESS'
export const LOAD_FLIGHTS_ERROR = 'LOAD_FLIGHTS_ERROR'

export function loadFlights() {
  return {
    type: LOAD_FLIGHTS,
  }
}

export function flightsLoaded(flights) {
  return {
    type: LOAD_FLIGHTS_SUCCESS,
    flights,
  }
}

export function flightsLoadingError(error) {
  return {
    type: LOAD_FLIGHTS_ERROR,
    error,
  }
}
