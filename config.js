'use strict';

var path = require('path')
  ;

module.exports = {
  secret: '35acc236-50ea-42c2-b47b-3682419b9b86'
, username: require('./real-secret.js').username
, password: require('./real-secret.js').password
, proxyUrl: 'https://testthru.hellabit.com:8043'
, hostname: 'testthru.hellabit.com'
, port: '8043'
, ca: path.join(__dirname, 'tests', 'certs', 'ca', 'my-root-ca.crt.pem')
, key: path.join(__dirname, 'tests', 'certs', 'client', 'my-app-client.key.pem')
, cert: path.join(__dirname, 'tests', 'certs', 'client', 'my-app-client.crt.pem')
};
