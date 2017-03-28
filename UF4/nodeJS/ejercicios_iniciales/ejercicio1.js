var http = require("http");


http.createServer(function(request, response) {
  //Enviamos la cabecera http
  //estado de http: 200 : OK!
  //contenido: texto plano
  response.writeHead(200,{'Content-Type': 'text/plain'});
  //Envia el body
  response.end('Puto amo de Node');
}).listen(8081);


//log de la consola para asegurarnos que funciona:

console.log('servidor funcionando como un puto PRO! en el puerto 8081 no te olvides capullo!');


//callback:
//var fs = require("fs");

//fs.readFile('input.txt',function(err, data) {
//  if(err) return console.error(err);
//    console.log(data.toString());

//});

//Fin del programa
