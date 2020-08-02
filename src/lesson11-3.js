// 文件有多少个字符
// const fs = require("fs")
// const readStream = fs.createReadStream("../release/bundle.js")

// let length = 0

// readStream.on('data', function (chunk) {
//     let len = chunk.toString().length
//     console.log("len", len);
//     length += len
// })

// readStream.on('end', function (chunk) {
//     console.log("length", length);
// })

const fs = require("fs")
const readline = require("readline")

let rl = readline.createInterface({
    input: fs.createReadStream("../release/bundle.js")
})

let lineNum = 0

rl.on('line', function (line) {
    lineNum++
})

rl.on('close', function (chunk) {
    console.log("lineNum", lineNum);
})