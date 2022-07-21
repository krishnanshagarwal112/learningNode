const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result.txt', 
    `Chelsea is the best football club`,
    {flag: 'w'} 
    )

const third = readFileSync('./content/result-sync.txt','utf8')

console.log(first);
console.log(second);
console.log(third);