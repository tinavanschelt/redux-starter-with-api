/**
 * This is the entry file for the application
 */

import React, { Fragment } from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import GlobalStyle from './global-styles';
import Hello from './containers/Hello';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Fragment>
      <App>
        <Hello name="Mars" />
      </App>
      <GlobalStyle />
    </Fragment>,
    document.getElementById('app')
  );
});
