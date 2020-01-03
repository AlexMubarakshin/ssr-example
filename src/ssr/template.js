/**
 * Insert data in template
 *
 * @export
 * @param {Object} helmet Helmet rendered static 
 * @param {string} [content=''] JSS string
 * @param {*} store Redux store
 * @param {string} css CSS string
 * @return {string} HTML template
 */
export default function template(helmet, content = '', store, css) {
  const state = store.getState();

  const scripts = `<script>
                    window.__STATE__ = ${JSON.stringify(state)}
                  </script>
                  <script src="/client.js"></script>`;

  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#556cd6">
                <link rel="shortcut icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">${content}</div>
                </div>
                <style id="jss-server-side">${css}</style>
                ${scripts}
              </body>
              `;
  return page;
}
