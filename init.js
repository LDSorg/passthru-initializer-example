'use strict';

var PromiseA = require('bluebird').Promise
  , request = require('request')
  , requestAsync = PromiseA.promisify(request)
  , config = require('./config')
  , testAgent = require('./test-agent')
  ;

requestAsync({
  url: config.proxyUrl + '/api/init'
, method: 'POST'
, json: { secret: config.secret }
, agent: testAgent
}).spread(function (resp, body) {
    console.log(body);
  }).error(function (err) {
    console.error('ERROR');
    console.error(err);
  });
