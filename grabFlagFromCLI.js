//synchronously
function grabFlag(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

console.log(grabFlag("--greeting"));
console.log(grabFlag("--user"));

console.log(process.argv);