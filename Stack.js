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

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  findMin() {
    if (this.isEmpty()) return null;
    let min = this.top.data;
    let current = this.top.next;
    while (current) {
      if (current.data < min) min = current.data;
      current = current.next;
    }
    return min;
  }
  sort() {
    if (this.isEmpty()) return;
    const tempStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!tempStack.isEmpty() && tempStack.peek() > temp) {
        this.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    this.top = tempStack.top;
  }
}

module.exports = Stack;