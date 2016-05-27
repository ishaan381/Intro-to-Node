var fs = require('fs');

fs.readFile(process.argv[2], function(error, contents) {
  console.log(contents.toString().split('\n').length - 1);
});

