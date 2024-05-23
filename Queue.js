const Node = require('./Node');
class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
        this.size++;
      }

      dequeue() {
        if (this.isEmpty()) return null;
        const dequeuedNode = this.first;
        if (this.first === this.last) {
          this.first = null;
          this.last = null;
        } else {
          this.first = this.first.next;
        }
        this.size--;
        return dequeuedNode.data;
      }

      peek() {
        if (this.isEmpty()) return null;
        return this.first.data;
      }
    
      isEmpty() {
        return this.first === null;
      }
    
      count() {
        return this.size;
      }
}  



module.exports = Queue;