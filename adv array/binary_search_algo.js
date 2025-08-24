// binary search algorithm requires sorted array

let arr = [10,23,45,65,69,190,200]

if(binarySearch(arr,190) === -1) console.log("Element not found")
else console.log(`Element found at ${binarySearch(arr,190)} index`)

function binarySearch(arr,target){
    let s=0, e = arr.length-1;
    while(s<=e){
        let mid = (s+e)/2;
        if(arr[mid]==target) return mid;
        else if(arr[mid]>target) e = mid -1;
        else s = mid + 1;
    }
    return -1;
}