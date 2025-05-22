const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your Name? ", name => {
    console.log(`You Entered:  ${name}`);
    rl.close();
});