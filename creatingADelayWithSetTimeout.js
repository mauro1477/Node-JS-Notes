const waitTime = 3000;
console.log(`Wait Time ${waitTime/1000} seconds`);
const timerFinished = () => console.log("Done");

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementInterval = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime/1000} seconds`);
}

const interval = setInterval(incrementInterval, waitInterval);