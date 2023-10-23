// =======================================Linear search==========================================================================================

// let arr = [2,5,7,9,12,23,45];
// let find = 9;
// let position;
// for(let i=0; i<arr.length-1; i++){   // i<=arr.length both r same
// if(arr[i] == find){
//     position = i;
//     break;
// }
// }
// console.log(position);                      //  time - O(n)

// =================================================Binary Search==================================================================================

// let arr = [1,3,6,8,9,13,15,67,89,90];
// let find = 13;
// let start = 0; 
// let end = arr.length-1
// let position;

// while(start<=end){
//     mid= Math.floor((start+end)/2)
//     // console.log(mid);
//     // console.log(arr[mid]);
//     if(arr[mid]==find){
//         position=mid
//         break
//     }else if(arr[mid]<find){
//       start=mid+1
//     }else{
//        end=mid-1
//     }
// }                                                            // O(log n)
// console.log(position);

// ============================================Binary Search with Recursion=====================================================================

let arr = [1,4,6,8,9,10];
let find = 8;
let start = 0; 
let end = arr.length - 1
let position;

 function rec(arr, start, end){
    mid = Math.floor((start+end)/2);
    if(arr[mid]==find){
        position=mid
        return true
    }else if(arr[mid]<find){
    rec(arr, mid+1, end)
    }else{
        rec(arr, start, mid-1)
    }
}

 rec(arr, start, end);
 console.log(position);