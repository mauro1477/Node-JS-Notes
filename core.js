const path = require("path");
const util = require("util");
const v8 = require("v8");
console.log(path.basename(__filename));

const uploadsDir = path.join(
    __dirname,
    "wp-content",
    "themes",
    "custom-theme"
);

console.log(v8.getHeapCodeStatistics());