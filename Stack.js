const Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
  

}

module.exports = Stack;