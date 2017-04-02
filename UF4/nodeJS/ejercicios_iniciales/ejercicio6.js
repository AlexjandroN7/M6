var fs = require('fs');
var http = require('http');


http.createServer(function(req,res){

        var readStream = fs.createReadStream('asserts/foto.jpeg');

        res.writeHead(200,{'Content-Type': 'image/jpeg'});

        readStream.on('data', function(data){
          res.write(data);
        });

        readStream.once('end', function(){
          res.end();
        });
}).listen(8081);
