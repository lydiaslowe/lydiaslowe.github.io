var fs = require('fs');
var from_folder = "./from/";
var to_folder = "./../images/";
fs.readdir(from_folder, function(err, files) {
   var i = 1;
   files.forEach(function(file) {
      fs.rename(from_folder + file, from_folder + String(i) + '.jpg', function(err) {
         console.log(err);
      });
      i++;
   });
   console.log(files);
});
