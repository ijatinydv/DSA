let num = Number(prompt("Enter a number : "))

// let isPrime = true;

// for(let i = 2;i<=num/2;i++){
//     if(num%i ==0) {
//         isPrime = false
//         break;
//     }
// }
// console.log(isPrime? "Prime number" : "Not a prime number");


// if 2 se lekar sqrt(num) tkk koi bhi number agar num ko divisible nhi krr paya toh koi isko divide nhi kr skta


// best approach - that is good

let isPrime = isPrimeFun(num);
console.log(isPrime? "Prime number" : "not a prime number")


function isPrimeFun(n){
    if(n<=1) return false
    if(n==2) return true
    if(n%2==0) return false
    for(let i = 3; i<=Math.floor(Math.sqrt(n));i+=2){
        if(n%i==0) return false
    }
    return true
}