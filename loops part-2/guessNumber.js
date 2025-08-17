let com = Math.floor((Math.random()*100) + 1);

let userInput;

do{
    userInput = Number(prompt("Guess the number b/w 1 to 100 : "));
    if(isNaN(userInput) || userInput<0 || userInput>100) {
        console.log("Please enter a valid number");
        continue;
    }
    if(userInput>com) console.log("too high, enter low")
    else if(userInput<com) console.log("too low, enter high")
    else console.log("congrats 🎊, you got right and the number was"+ com)
}while(userInput !== com)