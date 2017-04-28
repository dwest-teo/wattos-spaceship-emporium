const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');
const isDev = require('./lib/is-dev');

const app = next({ dev: isDev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) {
      throw err;
    }

    console.log('> Ready on http://localhost:3000');
  });
});
