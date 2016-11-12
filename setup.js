// source: https://medium.com/@rafaelvidaurre/managing-environment-variables-in-node-js-2cb45a55195f#.28euhh6oh

// create file called '.auth-env' with the following lines: 
// the dummy values you will replace in the resulting .env file.  See source
// URL above for more information

// CONSUMER_KEY=consumer_key_replace_me
// CONSUMER_SECRET=consumer_secret_replace_me
// TOKEN=token_replace_me
// TOKEN_SECRET=token_secret_replace_me

'use strict';
var fs = require('fs');
fs.createReadStream('.auth-env')
  .pipe(fs.createWriteStream('.env'));

