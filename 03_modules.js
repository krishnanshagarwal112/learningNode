// MODULES (only sharing what we want, keeping it minimize)
// Every file in node is module



const names = require("./04-names")         // importing names

const sayHi = require("./05-utils")
//console.log(names)

sayHi("kichi")
sayHi(names.name2)
sayHi(names.name3)
