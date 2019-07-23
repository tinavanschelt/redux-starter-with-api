import path from 'path';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import configDev from '../webpack/webpack.dev.babel';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const PORT = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production';

const app = express();
const compiler = webpack(configDev);

const jsonServer = require('json-server');
const seed = require(path.join(__dirname, '../api/data.json'));

app.use('/api', jsonServer.bodyParser);
app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(seed));

if (!isProd) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: configDev.output.publicPath
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(compression());

  app.use(
    express.static('dist/public', {
      setHeaders(res, resPath) {
        // do not set Cache-Control for index page
        const isIndexFile = resPath.endsWith('/index.html');
        if (!isIndexFile) {
          res.setHeader('Cache-Control', '86400');
        }
      }
    })
  );
}

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(
        `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      );
});
