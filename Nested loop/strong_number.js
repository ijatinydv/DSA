// A strong number is a positive interger where the sum of the factorials of it's digit equal to original number itself.

const prompt = require('prompt-sync')()

let n = Number(prompt("Enter the number : "))
let ncopy = n
let rem;
let ans = 0;

while(n>0){
    rem = ncopy%10;
    ncopy = Math.floor(ncopy/10)
    let fact = 1;
    for(let i = 1;i<=rem;i++){
        fact *= i;
    }
    ans += fact
}

if(ans===n) console.log("Given number is strong number")
else console.log("Given number is not a strong number")
