let year = Number(prompt("Enter the year : "))
let isLeap = false;

if(year%4==0){
    if(year%100==0){
        if(year%400==0) isLeap=true;
        else isLeap=false;
    }else{
        isLeap = true;
    }
}else{
    isLeap = false
}

console.log(isLeap? "Leap year" : "not a leap year");

// for a leap year a year divisible by 400 and 4 is a leap year and if a year is divisible by 100 then it should be divisible by 400
