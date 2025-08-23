let arr = [10,21,11,32,65,41];

let temp = arr[0]
for(let i =0;i<arr.length-1;i++){
    arr[i] = arr[i+1]
}

arr[arr.length-1] = temp

console.log(arr)