// let data = [];
// let currentSize = data.length;
// let maxSize = 4;

// function enqueue(newVal){
//     if(currentSize>=maxSize){
//         console.log("queue is full");
//     }else{
// data[currentSize]=newVal
// currentSize++
//     }
// }

// function dequeue(){
//     if(!isEmpty){
// for(let i=0; i<data.length; i++){
//     data[i]=data[i+1]
// console.log(data[i]);
// }
// currentSize--;
// data.length=currentSize
//     }else{
//         console.log("dequeue is already empty");
//     }
// }

// function display(){
//     console.log(data);
// }
// enqueue(10)
// enqueue(80)
// enqueue(30)
// enqueue(90)
// // dequeue()
// // dequeue()
// // dequeue()
// // dequeue()
// display()

// // ================================================front & rear in queue================================================================

// function front(){
//     if(!isEmpty){
// console.log(data[0]);
//     }else{
//         console.log("queue empty");
//     }
// }
// front()

// function rear(){
//     if(!isEmpty){
// console.log(data[currentSize-1]);
//     }else{
//         console.log("queue empty");
//     }
// }
// rear()

// function isEmpty(){
//     if(currentSize<=0){
//         return false
//     }else{
//         return true
//     }
// }

// ==========================================Circular Queue==============================================================================

class Queue{
    constructor(size){
        this.max = size;
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(val){
        if(this.currentSize != this.max){
            if(this.rear == this.max-1){
                this.rear=0
            }else{
                this.rear++
            }
          this.items[this.rear] = val;
          this.currentSize++
          if(this.front == -1){
            this.front = this.rear
          }
        }
}

dequeue(){
    if(this.currentSize != 0){
this.items[this.front] = null;
if(this.front == this.max -1){
    this.front = 0
}else{
    this.front++
}
this.currentSize--;

    }else{
        this.front = -1;
        this.rear = -1;
        console.log("dequeue is empty");
    }
}

}
let queue= new Queue(4)
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(90)
queue.dequeue()
console.log(queue);