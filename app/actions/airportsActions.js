export const LOAD_AIRPORTS = 'LOAD_AIRPORTS'
export const LOAD_AIRPORTS_SUCCESS = 'LOAD_AIRPORTS_SUCCESS'
export const LOAD_AIRPORTS_ERROR = 'LOAD_AIRPORTS_ERROR'

export function loadAirports() {
  return {
    type: LOAD_AIRPORTS,
  }
}

export function airportsLoaded(airports) {
  return {
    type: LOAD_AIRPORTS_SUCCESS,
    airports,
  }
}

export function airportsLoadingError(error) {
  return {
    type: LOAD_AIRPORTS_ERROR,
    error,
  }
}
