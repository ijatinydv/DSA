let num1 = Number(prompt("Enter first number :"))
let num2 = Number(prompt("Enter second number :"))

// function GCD_finder(){
//     let rem;
//     if(num2>num1){
//         let temp= num2;
//         num2 = num1;
//         num1 = temp;
//     }
//     do{
//         rem = num1%num2;
//         num1 = num2;
//         num2 = rem;
//     }while(rem !== 0)
//         return num1;
// }

function GCD_finder(a,b){
    if(b===0){
        return a
    }
    return GCD_finder(b,a%b)
}

console.log("GCD is :",GCD_finder(num1,num2));