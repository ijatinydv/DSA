const prompt = require('prompt-sync')()

let arr = [1, 5, 6, 8, 9, 7, 3];

let k = Number(prompt("Enter the number : "));

k = k % arr.length     // by this we can reduce repetative task


// this is a brutforce method -- not optimized


// for (let j = 1; j <= k; j++) {
//     let copy = arr[0]
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length-1] = copy
// }

// console.log(arr)


// next method -- reduces time but require space 

// let temp = new Array(arr.length)

// for(let i = 0; i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp)



// Now let's come to most efficient solution --> no duplicate array change in same array

// Blockswap reverse algorithium

reverse(arr,0,k-1);
reverse(arr,k,arr.length-1)
reverse(arr,0,arr.length-1)

console.log(arr)

function reverse(arr,i,j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
}