const EventEmitter = require('events');
const { add } = require('lodash');

const customEmitter = new EventEmitter()        // We have object of the class

// ON will listen for events
// EMIT will emit the events
// first we listen then we emit

customEmitter.on('chelsea',(name, age)=>{
    console.log(`${name} is ${age} years old`);
})

customEmitter.on('chelsea',()=>{
    console.log(`HAVERTZ lives in `);
})

customEmitter.emit('chelsea','Frank','17')