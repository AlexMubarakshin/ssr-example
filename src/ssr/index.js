import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

import App from '../App';
import template from './template';
import { createStore } from '../store';

/**
 * Render SSR content
 *
 * @export
 * @param {string} url
 * @return {string} HTML page
 */
export default function render(url) {
  const reactRouterContext = {};

  const sheets = new ServerStyleSheets();

  const store = createStore();

  const content = ReactDOMServer.renderToString(
    sheets.collect(
      <Provider store={store}>
        <StaticRouter location={url} context={reactRouterContext}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StaticRouter>
      </Provider>
    )
  );

  const helmet = Helmet.renderStatic();

  return template(helmet, content, store, sheets.toString());
}