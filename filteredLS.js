var fs = require('fs');

fs.readdir(process.argv[2], function(error, list) {
  
  for (var i in list) {
    if (list[i].slice(list[i].length - process.argv[3].length-1)=="."+process.argv[3]) {
      console.log(list[i]);
    };
  };
});