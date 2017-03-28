//definir un evento que cuando se lance imprima el mensaje : los huevos se han roto y la leche derramado

var evento = require('events');


var eventEmitter = new evento.EventEmitter();

var leche = function derramada() {
  console.log(' y la leche derramada');


}


  eventEmitter.on('leche', leche);

var huevos = function rotos() {
  console.log('los huevos se han roto');
}
  eventEmitter.on('huevos', huevos );

  eventEmitter.emit('huevos');
    eventEmitter.emit('leche');
  console.log('todo bien');
