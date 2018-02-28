# Super Simple React Starter

A simple React starter built for personal use. I generally use if for quick examples / prototyping.

* a lightweight webpack config
* styled-components
* eslint & hot reloading
* Heroku-ready deployment setup (thanks to https://github.com/alanbsmith/react-node-example)

## Setup

Install dependencies with
```
$ yarn
```

Fire up a development server on `http://localhost:8080/` with
```
$ yarn dev
```

## Production Build

To build your production assets and run the server, run
```
$ yarn start
```

## Linting

To run the linter once:
```
$ yarn lint
```

To run the watch task:
```
$ yarn lint:watch
```

The above uses eslint and eslint-watch.

## Deploying to Heroku

If you haven't already, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```

Heroku will 
* follow the `build` command in your `package.json`
* compile assets with `webpack.prod.config.js`
* run the Express web server in `server.js`

## Kudos

* https://github.com/alanbsmith/react-node-example
* https://github.com/react-boilerplate/react-boilerplate