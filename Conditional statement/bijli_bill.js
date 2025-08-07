let unit = Number(prompt("Enter the number of unit : "));

let amount = 0;


// Top to bottom approach

// if(unit>0&&unit<=100) amount = unit*4.2
// else if(unit>100&&unit<=200) amount = (100*4.2)+(unit-100)*6
// else if(unit>200&&unit<=400) amount = (100*4.2)+(100*6)+(unit-200)*8
// else if(unit>400) amount = (100*4.2)+(100*6)+(100*8)+(unit-300)*13
// else{
//     console.log("invalid Input");
//     unit=0;
// }
// console.log("Bill price = ",amount)


// bottom to top approach

if(unit>400){
    amount = (unit-400)*13;
    unit = 400
}
if(unit>200 && unit<=400){
    amount += (unit-200)*8;
    unit = 200;
}
if(unit>100 && unit<=200){
    amount += (unit-100)*6;
    unit = 100;
}
   amount += (unit)*4.2

console.log(amount);
