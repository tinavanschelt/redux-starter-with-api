import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    color: #333;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #FFF;
    min-height: 100%;
    min-width: 100%;
  }

  img {
    max-width: 100%;
  }

  p,
  label {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      color: blue;
    }
  }
`;
