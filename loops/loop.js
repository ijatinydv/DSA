// declare/initialise , condition, change - these  are three things in any loop
// we have 2 types of loop - entry controlled and exit controlled
// Exit controlled loop is do while loop
// Entry controlled loop is for and while loop

// these three parameters are optional in loop...you have to give only ;; in a loop to be valid...but these are important if we want a correct loop that will give exactly what we want...

// for(let i = 1; i<=5;i++){   
//     console.log("Hello World");
    
// }


let n = Number(prompt("Enter the number :"))

if(isNaN(n)){
    console.log("invalid input");  // bcz we can't convert string to a number...so it return nan
}else{
    let i;
    for(i=1;i<=n;i++){
        console.log("Hello world!");
    }
    console.log("fail at ",i);
    
}
