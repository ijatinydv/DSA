let arr = [10,21,11,32,65,41];

for(let i =0;i<arr.length-1;i++){
    let temp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temp
}

console.log(arr)