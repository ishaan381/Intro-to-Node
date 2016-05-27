var myModule = require('./makeItModularExporter');

myModule(process.argv[2], process.argv[3], function(error, files) {
  for(var i in files) {
    console.log(files[i]);
  }
});
