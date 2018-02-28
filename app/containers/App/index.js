

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import ContentWrapper from '../../components/ContentWrapper';

function App(props) {
  return (
    <ContentWrapper>
      { Children.toArray(props.children) }
    </ContentWrapper>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
