// for(let i = 1; i<=5; i++){
//     process.stdout.write("*")   // this function has come from node..in this unlike console.log() every charater is on the same line not other
// }

var prompt = require('prompt-sync')()  // used to take input from the user in terminal


for(let i = 1;i<=5;i++){
    for(let j = 1; j<=i;j++){
        process.stdout.write("*")
    }
    console.log()
}