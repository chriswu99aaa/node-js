/**
 * EventEmitter fires some event. This means that some events occur and do something.
 * We need requried the events module and create a new instance of EventEmitter.
 */

const  EventEmitter = require('events')
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1,num2, num3)=>{
    console.log(num1+num2+num3);
});

eventEmitter.emit('tutorial', 1,2,9);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}


let chris = new Person("Chris");
chris.on('name', ()=>{
    console.log('this person is ' + chris.name);
});
chris.emit('name');