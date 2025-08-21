const prompt = require('prompt-sync')()

let n = prompt("Enter a number :")

// Dynamic right angled triangle using '*'

// for(let i = 1;i<=n;i++){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }


// Dynamic right angled triangle using numbers 

// for(let i = 1; i<=n; i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j+" ")
//     }
//     console.log()  // by this we go to the next line
// }


// Dynamic right angled triangle using alphabets

for(let i = 1;i<=n;i++){
    for(let j=0;j<i;j++){
        process.stdout.write(String.fromCharCode(65+j) + " ")
    }
    console.log()
}