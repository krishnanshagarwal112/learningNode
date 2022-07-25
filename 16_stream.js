const mod = require('fs')

const reader = mod.createReadStream('./content/big.txt',
{highWaterMark: 9000,
encoding: 'utf8'})

// default 64kkb


reader.on('data',(result)=>{
    console.log(result);
})

reader.on('error',(err)=>{
    console.log(err);
})