const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack Implementation
class Stack {
  constructor(data) {
    this.data = data
    this.top = null;
    this._size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this._size--;
    return poppedNode; 
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let current = this.top;
    let min = current.data;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  peek() {
    return this.top; 
  }

 
  sort() {
    if (this.isEmpty()) {
      return;
    }
    const tempStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!tempStack.isEmpty() && tempStack.peek().data > temp.data) {
        this.push(tempStack.pop().data);
      }
      tempStack.push(temp.data);
    }
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop().data);
    }
  }
}

// Queue Implementation
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
    this.max = null
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
    this._size++;
  }

  size() {
    return this._size;
  }

  count() {
    return this._size;
  }


  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.first;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    this._size--;

    if (dequeuedNode.data === this._max) {
      this.recalculateMax();
    }

    return dequeuedNode.data;
  }

  isEmpty() {
    return this.first === null;
  }

  findMax() {
    if (this.isEmpty()) {
      return null;
    }
    let current = this.first;
    let max = current.data;
    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }

  peek() {
    return this.first; 
  }

  getLast() {
    return this.last; 
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
