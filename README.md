Readme notes

Node JS

Uses cases:
-Commend Line Tools
-Configure Server
-Interact with server Systems

Standard input and output
Module system and file system

globel is like window in JS

User "node" to run files

2. Global Node 
process.stdout.write

asynchronously prompt for input data
process.stdin.on

-Create time out program
setTimeout

Using 'process.stdin.on('data', ...)' allows the Node.js application to listen for incoming data events and process the input asynchronously, thus keeping the process running and able to accept additional inputs.

Using emitter.emit allows us to trigger custom events that can be handled elsewhere in the code, such as within the ask function, providing better separation of concerns and more modular code.


####THIS `require`is only for Common JS
The correct approach is to use `module.exports` in `inventory.js` for exporting functions and use `require` in `app.js` to import them as this follows the CommonJS module pattern used in Node.js.

The path.join method is used to join all specified path segments into one path string.

The 'readline' module in Node.js provides an interface for reading data from a readable stream (such as process.stdin), allowing for easily controlled user prompts and responses.
