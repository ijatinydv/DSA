// An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11

// Take a input from user and check if it is a valid ISBN or not

let ISBN = prompt("Enter the ISBN Number :").trim()
let rem;
let sum = 0

if(ISBN.length !== 10){
    console.log("ISBN should be of 10 character.")
}
else{
    for(let i = 10; i>0; i--){
    rem = ISBN % 10;
    ISBN = Math.floor(ISBN/10);
    sum += i*rem;
}
}


if(sum % 11 == 0){
    console.log("Given ISBN is a valid")
}else{
    console.log("Given ISBN is invalid")
}