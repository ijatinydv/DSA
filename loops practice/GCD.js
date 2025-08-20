let num1 = Number(prompt("Enter first number :"))
let num2 = Number(prompt("Enter second number :"))

function GCD_finder(){
    let rem;
    if(num2>num1){
        let temp= num2;
        num2 = num1;
        num1 = temp;
    }
    do{
        rem = num1%num2;
        num1 = num2;
        num2 = rem;
    }while(rem !== 0)
        return num1;
}

console.log("GCD is :",GCD_finder());