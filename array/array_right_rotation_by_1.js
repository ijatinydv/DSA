let arr = [10,21,11,32,65,41];

let temp = arr[arr.length-1]

for(let i = arr.length-1;i>0;i--){
    arr[i] = arr[i-1];
}
arr[0] = temp;

console.log(arr)