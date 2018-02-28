/**
 * This is the entry file for the application
 */

import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import Hello from './containers/Hello';

// Import Global Styles
import './global-styles';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <App>
      <Hello name="Mars" />
    </App>,
    document.getElementById('app')
  );
});

