import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Brewdog's beer explorer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#556cd6">
    <link rel="shortcut icon" href="/assets/logos/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/assets/logos/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  <body>
    <div class="content">
       <div id="app" class="wrap-inner"></div>
    </div>
    <script src="/client.js"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`The app is running in PORT ${PORT}`);
});
