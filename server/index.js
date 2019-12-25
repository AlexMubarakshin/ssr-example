import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { SheetsRegistry, JssProvider } from 'react-jss';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

import App from '../src/App';
import template from './template';

export default function render(url) {
  const reactRouterContext = {};

  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();

  const theme = createMuiTheme({});

  const generateClassName = createGenerateClassName();

  const content = renderToString(
    <StaticRouter location={url} context={reactRouterContext}>
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return template(helmet, content, sheetsRegistry);
}