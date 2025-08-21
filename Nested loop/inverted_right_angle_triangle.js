const prompt = require('prompt-sync')()

let n = prompt("Enter a number :")

// inverted right angled triangle

for(let i = n;i>0;i--){
    for(let j= 1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log()
}

// second method

for(let i = 1; i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write("* ")
    }
    console.log()
}