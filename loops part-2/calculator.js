let userInput;
do{
    let num1 = Number(prompt("Enter a first number : "))
    let num2 = Number(prompt("Enter a second number : "))
    let operator = prompt("Enter a valid operator(=,-,*,/) : ")
    switch(operator){
        case '+' :
            console.log("result "+(num1+num2))
        break
        case '-' :
            console.log("result "+(num1-num2))
        break
        case '*' :
            if(num2 !==0) console.log("result "+(num1*num2))
            else console.log("please enter a valid number")
        break
        case '/' :
            console.log("result "+(num1/num2))
        break
        default :
            console.log("please enter valid operators")
    }
    userInput = prompt("kya aap dubara chalana chahte hai? yes/no").toLowerCase()
}while(userInput === 'yes')