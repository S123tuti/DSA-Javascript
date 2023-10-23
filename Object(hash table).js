let data= {
    Name: "Stuti",
    Age: "22",
    Mail: "abc@gmail.com"
}
data.password= "123",
data.contact = "9876543201"
delete data.password
for(key in data){
    // console.log(data[key]);
    // console.log(Object.keys(data));
}
// console.log(data);
// console.log(Object.keys(data));
// console.log(Object.values(data));
console.log(Object.entries(data));