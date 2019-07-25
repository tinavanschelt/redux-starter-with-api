import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { H1 } from '../components'

import { loadAirports } from '../actions'

class Airports extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(loadAirports())
  }

  render() {
    const { airports, loadingAirports } = this.props
    return (
      <div>
        {loadingAirports ? (
          <div>LOADING</div>
        ) : (
          <Fragment>
            <H1>Airports</H1>
            {airports.map(airport => (
              <div key={airport.code}>{airport.code}</div>
            ))}
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    airports: state.airports.data,
    loadingAirports: state.airports.loading,
  }
}

Airports.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Airports)
