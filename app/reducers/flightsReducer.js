import {
  LOAD_FLIGHTS,
  LOAD_FLIGHTS_SUCCESS,
  LOAD_FLIGHTS_ERROR,
} from '../actions'

const initialState = {
  loading: true,
  error: false,
  errorMessage: '',
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FLIGHTS:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      })
    case LOAD_FLIGHTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.flights,
      })
    case LOAD_FLIGHTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorMessage: action.error,
      })
    default:
      return state
  }
}
