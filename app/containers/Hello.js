import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from '../components';

function Hello({ name }) {
  return <H1>Hello, {name}!</H1>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

export default Hello;
