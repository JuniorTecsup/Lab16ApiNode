const util = require('util');
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter);
console.log(MyStream.super_ === EventEmitter);

stream.on('data', (data) => {
  console.log(`Dato recibido: "${data}"`);
});
stream.write('Alfredo Junior Vilchez Ramos!');
