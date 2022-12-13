const EventEmitter = require('events');

//const emitter = new EventEmitter(); //like new classes in java

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    
        //raise an event
        this.emit('connection', {id:1, message:'aaa'}); //args w an object
    }
}



module.exports = Logger;