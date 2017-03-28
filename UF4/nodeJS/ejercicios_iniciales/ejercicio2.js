
//llamamos a los eventos para usarlos
var events = require('events');


//crear el emisor del evento
var eventEmitter = new events.EventEmitter();

//creamos el handler
var connectHandler =function connected() {
  console.log('ha funcionado!');
  //disparar el evento

  eventEmitter.emit('data_received');
}

//unir el emisor y el handler del evento

eventEmitter.on('connection', connectHandler);

//unir el evento data_received con la funcion anonima
eventEmitter.on('data_received', function() {
  console.log('data_received completo!')
});

//disparamos el evento de conexión

eventEmitter.emit('connection');
console.log('cerrar programa!');
