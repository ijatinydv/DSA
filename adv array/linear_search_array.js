// linear search array -- if the element found print the index else -1

let prompt = require('prompt-sync')()

let arr = [21,5,6,4,31,8,10,7];

let n = Number(prompt("Enter the element : "))

let index = -1;

for(let i = 0;i<arr.length;i++){
    if(arr[i]===n) {
        index = i;
        break;
    }
}

index == -1 ? console.log("Element not found.") : console.log(`Element found at ${index} index.`)