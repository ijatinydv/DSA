let arr = [1,2,3,4,5,6,7]

// this method need double memory to reverse the array

// let temp = new Array(arr.length)

// let i = 0;
// for(let j = arr.length - 1; j>=0; j--){
//     temp[i] = arr[j]
//     i++;
// }
// console.log(temp)


// Two pointer algorithem

let i = 0, j = (arr.length) -1;

while(i<j){
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
    i++
    j--;
}
console.log(arr)