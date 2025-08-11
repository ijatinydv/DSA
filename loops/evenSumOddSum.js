let num = Number(prompt("Enter the number : "))

let evenSum = 0;
let oddSum = 0;

for(let i = 1; i<=num;i++){
    if(i%2==0) evenSum += i;
    else oddSum += i;
}

console.log("Even sum : ",evenSum);
console.log("odd sum : ",oddSum);
