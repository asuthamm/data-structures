// LinkedList implementation
// this is also a queue implementation using link list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;  //? 
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    if (!this.head) {
      return;
    } 
    if (this.head === this.tail) {
      this.tail = null;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead;
  }

}


let x = new LinkedList();
x.push(1);
// console.log(x);

x.push(2);
x.push(3);
// console.log(x);

x.shift();


console.log(x);