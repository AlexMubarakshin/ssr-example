import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

import App from '../App';
import template from './template';

export default function render(url) {
  const reactRouterContext = {};

  const sheets = new ServerStyleSheets();

  const content = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={url} context={reactRouterContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();

  return template(helmet, content, sheets.toString());
}