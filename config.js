'use strict';

var path = require('path')
  , fqdn = 'local.foobar3000.com'
  ;

module.exports = {
  secret: '175d667b-6e61-4d26-9193-e21f08435d58'
, username: require('./real-secret.js').username
, password: require('./real-secret.js').password
, proxyUrl: 'https://' + fqdn + ':8043'
, hostname: fqdn
, port: '8043'
, ca: path.join(__dirname, 'certs', 'ca', 'my-root-ca.crt.pem')
, key: path.join(__dirname, 'certs', 'client', 'my-app-client.key.pem')
, cert: path.join(__dirname, 'certs', 'client', 'my-app-client.crt.pem')
};
