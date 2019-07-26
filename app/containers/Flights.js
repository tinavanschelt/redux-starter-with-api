import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

import { H1 } from '../components'

import { loadFlights } from '../actions'

class Flights extends Component {
  componentDidMount() {
    this.props.dispatch(loadFlights())
  }

  render() {
    const { flights, loadingFlights } = this.props
    return (
      <Fragment>
        {loadingFlights ? (
          <div>LOADING</div>
        ) : (
          <Fragment>
            <H1>Flights</H1>
            <Wrapper>
              {flights.map(flight => (
                <Draggable
                  defaultPosition={{ x: 0, y: 0 }}
                  position={null}
                  scale={1}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}
                  key={flight.number}
                >
                  <Flight key={flight.number}>{flight.number}</Flight>
                </Draggable>
              ))}
            </Wrapper>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`

const Flight = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 2px solid black;
  cursor: pointer;
  margin: 10px;
  padding: 20px;
  z-index: 1;
`

const mapStateToProps = state => ({
  flights: state.flights.data,
  loadingFlights: state.flights.loading,
})

Flights.propTypes = {
  dispatch: PropTypes.func.isRequired,
  flights: PropTypes.array,
  loadingFlights: PropTypes.bool,
}

Flights.defaultProps = {
  flights: [],
  loadingFlights: true,
}

export default connect(mapStateToProps)(Flights)
