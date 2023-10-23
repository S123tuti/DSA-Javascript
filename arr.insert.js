let arr = [12,23,34,45,67,78,89,90]
// for(let i=0; i<arr.length;i++){
// arr[2] = 10;
// console.log(arr[i]);
// }

arr[2] = 100
console.log(arr)

let data = [1,2,3,4,6,7,8,9];
let newdata = 5;
let position = 4
for(let i=data.length-1; i>=0; i--){
    if(i>=position){
        data[i+1]= data[i];
        
        if(i==position){
            data[i]= newdata
        }
    }
}
console.log(data);


// const data = [10,20,30, 40,50,70]
// const newel = 60
// position = 5
// for(let i=data.length-1; i>=0; i--){
//     if(i>=position){
//         data[i+1]=data[i]
//         if(i==position){
//             data[i]=newel
//         }
//     }
//     console.log(data)
// }



// ===============================================inbuild==================================================================================

let item = [1,2,5,6,7]
item.splice(2, 0, 100)
console.log(item);