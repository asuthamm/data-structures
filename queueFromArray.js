// Implement a queue using array
// This is not optimal. O(n) for the enqueue (arr re-indexing)

class QueueFromArray {
    constructor() {
      this.values = [];
    }
  
    enqueue(val) {
      this.values.unshift(val);
    }
  
    dequeue() {
      return this.values.pop();    
    }
  }
  
  const q = new QueueFromArray;
  q.enqueue(4);
  q.enqueue(7);
  console.log(q);
  console.log('-------')
  console.log(q.queue());
  console.log(q);
  
  // const x = new qqq();
  // x.enqueue(4);
  // console.log(x);