const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, year)=>{
    console.log(`Sbinnala ${name} next ${year} is who?`)
})
customEmitter.on('response', ()=>{
    console.log(`Ferrari Masterplan`)
})



customEmitter.emit('response','Binnoto', 2007)