// let arr = [];
// let csize = arr.length;
// maxValue = 5;
// // console.log(arr);

// function push(newValue){
//     if(csize>=maxValue){
//     console.log("stack is full" + newValue);
//     }
//     arr[csize]=newValue;
//     csize+=1
// }

// function pop(){
//     if(csize>0){
//      csize-=1;
//      arr.length=csize
//     }else{
//         console.log("stack is already empty You can't add more value");
//     }
// }

// push(10)
// push(60)
// push(90)
// push(120)
// pop()
// pop()
// push(123)
// push(3)

// console.log(arr);

// ============================================================reverse string using stack==========================================================

// let data = [];
// let currentSize = data.length;

// function push(newVal){
//     data[currentSize]=newVal;
//     currentSize+=1
// }

// function pop(){
// lastRemovedItem = data[currentSize-1];
// currentSize-=1;
// data.length=currentSize
// return lastRemovedItem
// }

// function reverseString(item){

// for(let i=0; i<item.length; i++){
// push(item[i])
// }
// for(let i=0; i<item.length; i++){
//     item[i]=pop()
// }
// }

// let str = "stuti";
// str = str.split("");
// reverseString(str)
// console.log(str);

// ==================================================Stack in class=================================================================================

class Stack{
item=[];
currentSize;
maxSize;

    constructor(size){
this.maxSize=size
this.currentSize=this.item.length
    }
    push(newVal){
        if(this.currentSize>=this.maxSize){
            console.log("stack is full");
        }else{
            this.item[this.currentSize]=newVal
            this.currentSize++
        }

    }
pop(){
if(this.currentSize>0){
this.currentSize--;
this.item.length=this.currentSize;
}else{
    console.log("stack is already empty");
}
    }

    display(){
console.log(this.item);
    }

}
s1 = new Stack(5);
s1.push(2)
s1.push(28)
s1.push(92)
s1.pop()
s1.pop()
s1.display()
// console.log(item);