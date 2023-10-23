// Question - Difference b/w Map & Object ?
// Answer - Object is always a string while map is any data type even undefined.
//          Object denote with colon while map by arrow (=>).
         

let map = new Map([
    ['name', 'stuti'],
    ['age', '22'],
    [100 , 'Rs'],
    ['key' , 'true']
]);
map.set('color', 'black')
// map.delete(100)
// console.log(map);
// console.log(map.size);
// console.log(map.has(100));
// console.log(map.get('age'));
// for(let key of map){
//     // console.log(key);
//     // console.log(key[0]);
//     // console.log(key[1]);
// }

// map.forEach((value, key)=>{
// //   console.log(value);
// //   console.log(key);
// })



// function Palindrome(str){
// let start =0; 
// let right = str.length-1;
// while(start < right){
//     if(str[start] != str[right]){
//         return false
//     }
//     start++
//     right--
// }
// return true
// }
// let str = "level"
// Palindrome(str)
// console.log(Palindrome(str));