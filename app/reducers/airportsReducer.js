import {
  LOAD_AIRPORTS,
  LOAD_AIRPORTS_SUCCESS,
  LOAD_AIRPORTS_ERROR,
} from '../actions'

const initialState = {
  loading: true,
  error: false,
  errorMessage: '',
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AIRPORTS:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      })
    case LOAD_AIRPORTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.airports,
      })
    case LOAD_AIRPORTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorMessage: action.error,
      })
    default:
      return state
  }
}
