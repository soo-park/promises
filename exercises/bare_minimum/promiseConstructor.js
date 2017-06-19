/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  
  return new Promise ((resolve, reject) => {
    fs.readFile (filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        var strings = data.split('\n');
        resolve(strings[0]);
      }
    });
  })
    .then((string) => { return string;})
    .catch((err) => { 
      if (err) throw err;
      done();
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject)=> {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(response.statusCode);
      }
    });
  })
  .then((code) => { 
    return code; })
  .catch((err) => { 
    if (err) throw err;
    done();
 });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

