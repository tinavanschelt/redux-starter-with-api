import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { H1, DropZone } from '../components'

import { loadAirports } from '../actions'

class Airports extends Component {
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
            <Wrapper count={airports.length}>
              {airports.map(airport => (
                <DropZone key={airport.code}>{airport.code}</DropZone>
              ))}
            </Wrapper>
          </Fragment>
        )}
      </div>
    )
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(${props => props.count}, 1fr);
`

const mapStateToProps = state => ({
  airports: state.airports.data,
  loadingAirports: state.airports.loading,
})

Airports.propTypes = {
  airports: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  loadingAirports: PropTypes.bool,
}

Airports.defaultProps = {
  airports: [],
  loadingAirports: true,
}

export default connect(mapStateToProps)(Airports)
