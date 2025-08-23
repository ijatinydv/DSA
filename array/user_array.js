const prompt = require('prompt-sync')()

let size = Number(prompt("Enter the size of array : "))

let arr = new Array(size)

let sum = 0

for(let i = 0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter element ${i+1} : `))
    sum += arr[i]
}

console.log("sum is " , sum)

// max element in an array

let max = arr[0]

for(let i =1;i<arr.length;i++){
    if(arr[i]>max) max = arr[i]
}
console.log("The max element in an array is : ",max)