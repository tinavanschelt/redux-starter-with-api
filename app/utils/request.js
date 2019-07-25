import 'whatwg-fetch'

// Gets the local / remote API
export function getAPI(hostname) {
  if (hostname.includes('localhost')) {
    return 'http://localhost:8080/api'
  }
  return 'https://simple-redux-starter.herokuapp.com/api'
}

// Parses the JSON returned by a network request
export function parseJSON(response) {
  return response.json()
}

// Checks if a network request came back fine, and throws an error if not
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// Requests a URL, returning a promise
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}
