 let data = new Set(["me", "you", "me"])  // doesn't contain duplicate values.
// let item = ["me", "you", "me"]  // array it takes duplicate values also
//  console.log(data);
//  console.log(data.has("me"));  // true
// console.log(item);

// for(key of data){
//     console.log(key);
// }

// data.forEach((val)=>{
//     console.log(val);
// })
console.log(data.keys());
console.log(data.values());
console.log(data.entries());  // keys & values r same