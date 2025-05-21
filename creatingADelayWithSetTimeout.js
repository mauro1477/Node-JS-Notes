const waitTime = 3000;
console.log(`Wait Time ${waitTime/1000} seconds`);
const timerFinished = () => console.log("Done");

setTimeout(timerFinished, waitTime);