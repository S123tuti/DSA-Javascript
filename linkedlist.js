// class List{
// constructor(data){
//     this.head={
//         value:data,
//         next: null,
//     }
//     this.tail=this.head
// }
// addNode(nodeData){
// let newNode = {
//     value:nodeData,
//     next:null,
// }
// this.tail.next= newNode;
// this.tail=newNode
// }
// }
// // let list = new List(200)
// let list = new List(500)
// list.addNode(100)
// list.addNode(200)
// list.addNode(300)
// console.log(list);

// ================================Traversing in Linkedlist=======================================================

class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1
  }
  addNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size+=1
  }
  traverse() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
//   deleteNode(index){
//     let counter = 1;
//     let lead = this.head
// if(index===1){
//     this.head = this.head.next
// }else{
//     while(counter<index-1){
// let lead = lead.next
// counter++
//     }
//     let nextNode = lead.next.next;
//     lead.next=nextNode
//     console.log(lead);
//   }
// }
insertNode(index,value){
let counter = 1;
let currentNode = this.head
while(counter>index){
counter++
currentNode = currentNode.next
}
let nextNode = currentNode.next
currentNode.next = {
    value:value,
    next:nextNode
}
}
searchNode(data){
    let result = undefined;
    let lead = this.head
    let loop = true;
    while(loop){
        lead = lead.next
        loop = !!lead
        if(loop && lead.value==data){
            loop = false
            result=lead
        }
    }
    console.log(result);
}
}
// let list = new List(200)
 let list = new List(500);
list.addNode(100);
list.addNode(200);
list.addNode(300);
// list.traverse();
// // list.deleteNode(3)
// list.insertNode(2, 700000)
list.searchNode(200)
console.log(list);
