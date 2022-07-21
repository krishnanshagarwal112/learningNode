const os = require("os")

// Info about user
const user = os.userInfo()
// console.log(user);

//method to return system's uptime in seconds
console.log(`The system uptime is : ${(os.uptime())/3600} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);