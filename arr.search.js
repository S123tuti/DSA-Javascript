let arr = [2,3,5,7,9,8,4,1]
item = 7
index = undefined
for(i=0; i<arr.length-1; i++){
if(arr[i]==item){
 index= i
}
}
console.log(index);
console.log(arr.indexOf(item));


// ========================================================inbuild===================================================================================

arr.splice(4,1);
console.log(arr);