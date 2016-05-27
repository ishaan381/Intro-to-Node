var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, fileExt, func) {
  fileExt = "." + fileExt;

  fs.readdir(directoryName, function(error, files) {
    if (error) {
      func(error, null);
    } 
    else {
      arr = [];
      files.forEach(function(file) {
        if (path.extname(file) == fileExt) {
          arr.push(file);
        }
      });
      func(null, arr);
    }
  });

};
 
