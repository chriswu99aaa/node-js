
const tutorial = require("./tutorial");
console.log(tutorial);
console.log(tutorial.sum(3,3));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());

const  eventEmitter = require('events'); 

eventEmitter.on('tutorial', ()=>{
    console.log("ttorial event has occurred");
});

eventEmitter.emit('tutorial');