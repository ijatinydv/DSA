// A number is a Harshad number if it is divisible by the sum of its digits

let num = Number(prompt("Enter the number :"));
let sum = 0;
let rem;
let numCopy = num

if(isNaN(num)){
    console.log("Enter number only!");
}
while(num>0){
    rem = num %10;
    num = Math.floor(num/10);
    sum += rem;
}

numCopy % sum ? console.log("Given number is not a Harshad number") : console.log("Given number is a Harshad number.")