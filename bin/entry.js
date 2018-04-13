require('babel-polyfill');
require('babel-register');

const fs = require('fs');
const path = require('path');
const env = require('dotenv');

env.config({
  path: path.resolve(__dirname, '../.env'),
});

require('../src');
