const waitTime = 3000;
console.log(`Wait Time ${waitTime/1000} seconds`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("\n Done")
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementInterval = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
}

const interval = setInterval(incrementInterval, waitInterval);