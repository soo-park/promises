/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  var error = new Error();
  var firstLine;
  fs.readFile(filePath, 'utf8', function (err, content) {
    console.log('Example from callbackReview.js');
    if (err) {
      callback(err, firstLine);
      console.log('fs.readFile failed :(\n', err);
    } else {
      console.log('fs.readFile successfully completed :)\n');
      firstLine = content.split('\n')[0];
      callback(err, firstLine);
    }
  });
  // callback(error, firstLine);
  // var err = new Error();
  // err.code = 'ENOENT';
  // fs.readFile(filePath, callback);
  // console.log(file);
  // callback(err, firstLine);

};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO

  request.get(url, function (err, content) {
    console.log('Example from callbackReview.js');
    if (err) {
      callback(err);
      console.log('request.get failed :(\n', err);
    } else {
      console.log('request.get successfully completed :)\n');
      callback(err, content.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
