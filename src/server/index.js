import express from 'express';
import path from 'path';
import ssr from './render';

import { matchRoutes } from 'react-router-config';
import Routes from '../router/routes';

import { createStore } from '../store';

const PORT = process.env.PORT || 3000;

const app = express();
const store = createStore();

app.use(express.static('public'));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.get('*', async (req, res) => {
  const actions = matchRoutes(Routes, req.path)
    .map(({ route }) => route.component.initialFetchData ? route.component.initialFetchData({ ...store, path: req.path }) : null)
    .map(async actions => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    ));

  await Promise.all(actions);

  const response = ssr(req.url, store);
  res.send(response);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`The app is running in PORT ${PORT}`);
});
