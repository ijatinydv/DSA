let n = Number(prompt("Enter a number : "))
let count = 0;
let nCopy = n;

while(n>0){
    count++;
    n=Math.floor(n/10)
}

let sq = nCopy*nCopy

if((sq%(Math.pow(10,count)))== nCopy){
    console.log("automorphic number");
}else{
    console.log("not a automorphic number")
}