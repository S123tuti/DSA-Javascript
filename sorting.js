// =======================================================BUBBLE SORT================================================================================

// let data = [40,30,12,25];
// // let data = [23,5,90,8,1,23,45,78,09,67,34,1,2,43,87]
// let a = data.length;
// for(let i=0; i<a; i++){
//     for(j=0; j<a; j++){
//         // console.log(i,j);
//         if(data[j]>data[j+1]){
//             let temp = data[j];
//             data[j]=data[j+1]
//             data[j+1]=temp
//         }
//     }
// }
// console.log(data);

// =============================================Selection Sort (in ascending Order)==================================================================================

// let arr = [1,33,5,7,9,10];
// let min;
// function selSort(arr){
//     for(let i=0; i<arr.length; i++){
//         min= i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j]<arr[min]){
//              min=j;
//             }
//         }
//         let temp = arr[min];
//         arr[min]=arr[i];
//         arr[i]=temp 
//     }
// }
// selSort(arr)
// console.log(arr)

// ==========================================Selection Sort (in decending Order)==================================================================
// ========================================Method 1============================================================================================

// let arr = [2,5,9,1,0,4,8,6,3,7];
// let a = arr.length;
// let max;
// function selSort(arr){
// for(let i=a-1; i>=0; i--){
//     max=i;
//     for(let j=i-1; j>=0; j--){
//         if(arr[j]<arr[max]){
//             max=j
//         }
//     }
//     let temp = arr[max];
//     arr[max] = arr[i];
//     arr[i] = temp; 
// }
// }
// selSort(arr);
// console.log(arr);

// ============================================Method 2============================================================================================

// let arr = [2,5,9,1,0,4,8,6,3,7];
// let a = arr.length;
// let max;
// function selSort(arr){
// for(let i=0; i<a; i++){
//     max=i;
//     for(let j=i+1; j<a; j++){
//         if(arr[j]>arr[max]){
//             max=j
//         }
//     }
//     let temp = arr[max];
//     arr[max] = arr[i];
//     arr[i] = temp; 
// }
// }
// selSort(arr);
// console.log(arr);


// ============================================Insertion sort=====================================================================================

let arr = [2,6,4,9,7,1];
function InSort(arr){
    let i, current, j;
for(let i = 1; i < arr.length; i++){
current=arr[i];
j = i-1
while(j>=0 && arr[i]>current){
    arr[j+1] = arr[j]
    j=j-1   //j--
}
arr[j+1] = current
}
}
InSort(arr)
console.log(arr);