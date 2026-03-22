const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "fsmodule", "file.txt");

const data=fs.readFileSync("./fsmodule/file.txt", "utf-8");

console.log(__dirname);




console.log(data);
