import express from 'express';
import path from 'path';
import ssr from './server';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.get('*', (req, res) => {
  const response = ssr(req.url);
  res.send(response);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`The app is running in PORT ${PORT}`);
});
