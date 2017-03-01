var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var appServer;

function startAppServer() {
  const compiler = webpack({
    entry: './app/main.js',
    output: {
      publicPath: '/public/',
      path: '/js/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          loaders: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015', 'react'
            ]
          }
        }
      ]
    }
  });

  appServer = new WebpackDevServer(compiler, {
    contentBase: __dirname + '/public',
    publicPath: '/public/',
    stats: { colors: true },
    port: 3000
  });

  appServer.use(express.static(__dirname + '/public'));

  appServer.use(bodyParser.urlencoded({
    extended: true
  }));

  appServer.use(bodyParser.json());

  var api = require('./routes')(appServer, express)
  appServer.use('/api', api);

  appServer.listen(3000, (err) => {
    if(err) {
      console.log(err)
    } else {
      console.log('Listening on port 3000');
    }
  })

}

startAppServer();
