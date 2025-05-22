const events = require("events");
let emitter = new events.EventEmitter();

emitter.on("custom-event", (message, user) => {
    console.log(`Event occurred with data message: ${message} User: ${user}`);
});

emitter.emit('custom-event', "Hello there ", "mauro");

process.stdin.on("data", (data) => {
    if (data.toString().trim() === "exit") {
        process.stdout.write("Shutting this bitch down");
        process.exit();
    }
    emitter.emit('custom-event', data.toString().trim(), 'termminal')
});