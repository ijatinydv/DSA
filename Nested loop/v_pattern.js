const prompt = require('prompt-sync')()

let n = Number(prompt("Enter the number :"));

for(let i =1;i<=n;i++){
    for(let j=1;j<=(n*2)-1;j++){
        if(i==j || i+j === n*2) process.stdout.write("* ")
        else process.stdout.write("  ")
    }
    console.log()
}