let arr = [1,2,5,8,7,4,3,9,0]
let position = 4;
for(let i=position; i<arr.length-1; i++){
// console.log(arr[i]);
arr[i]=arr[i+1]
// console.log(arr[i]);
}
arr.length= arr.length-1
console.log(arr);



const no = [10,20,30,40,50,60]
pos = 2
for(let i=pos; i<no.length-1; i++){
    no[i]=no[i+1]
}
    no.length=no.length-1
console.log(no)


// ======================================practice============================================================================

// let array = [1,2,3,4];
    // for(let i=array.length-1; i>=0; i--){
    // array[i+1] = array[i]
    // console.log(array);
    // }
    let array = [1,2,3,4];
    for(let i=0; i < array.length-1; i++){
       array[i+1] = array[i] ^array[i+1]
       array[i] = array[i] ^array[i+1]
       array[i+1] = array[i] ^array[i+1]
   
    }
    array.length = array.length-1
    console.log (array)