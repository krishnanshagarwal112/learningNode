// MODULES (only sharing what we want, keeping it minimize)
// Every file in node is module
// when we require a module, and a function is running in the module, it will be executed


const names = require("./04-names")         // importing names
const sayHi = require("./05-utils")
const data = require("./06-alternative_flavor")
//console.log(names)
// console.log(data)
// sayHi("kichi")
// sayHi(names.name2)
// sayHi(names.name3)

require("./07-sumFunction")