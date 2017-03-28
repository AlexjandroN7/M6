//crear una funcion que selecciona aleotariamente un elemento
//de una array de strings de 5 elementos y un evento
// que se dispara con estos datos y se imprime el string

var evento = require('events');


var emisor = new evento.EventEmitter();

var cinco = ['marc','torres','gamez','sabuco','alejandro'];
var r = Math.floor(Math.random() * cinco.length);
var random = function nombres(){
    console.log(cinco[r]);
}

emisor.on('array', random);

emisor.emit('array');
