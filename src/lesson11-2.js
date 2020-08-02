const EventEmitter = require("events").EventEmitter

// const emitter1 = new EventEmitter()
// emitter1.on("some", () => {
//     console.log("some event is occured 1");
// })

// emitter1.on("some", () => {
//     console.log("some event is occured 2");
// })

// emitter1.emit("some")

class Dog extends EventEmitter {
    constructor (name) {
        super()
        this.name = name
    }
}

const simon = new Dog("simon")
simon.on("bark", function () {
    console.log(this.name, 'barked-1');
})
simon.on("bark", function () {
    console.log(this.name, 'barked-2');
})
setInterval(() => {
    simon.emit("bark")
}, 500)