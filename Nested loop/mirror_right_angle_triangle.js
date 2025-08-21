const prompt = require('prompt-sync')()

let n = prompt("Enter a number : ");

// mirror right angled triangle is the combination of right angled triangle and inverted right angled triangle

for(let i = 1; i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write("  ")
    }
    for(let n =1;n<=i;n++){
        process.stdout.write("* ")
    }
    console.log()
}

// mid angle triangle

for(let i = 1; i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ")
    }
    for(let n =1;n<=i;n++){
        process.stdout.write("* ")
    }
    console.log()
}