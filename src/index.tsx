// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
// @ts-ignore
import githubTheme from 'typography-theme-github';

import App from './app';
import components from './components/mdx';
import * as serviceWorker from './serviceWorker';
import './index.css';

const typography = new Typography(githubTheme);
typography.injectStyles();

ReactDOM.render(
  <MDXProvider components={components}>
    <App />
  </MDXProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
