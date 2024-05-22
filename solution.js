const { toASCII } = require("punycode");
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
    this.length = 0;
  }
  push(data) {
    const newItem = new Node(data);
    if (!this.top) {
      this.top = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    let newItem = item.next;
    this.top = newItem;
    this.length -= 1;
    return item;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMin() {
    let min = 0;
    let item = this.top;
    for (let i = 0; i < this.size(); i++) {
      if (item <= min) {
        min = item;
        item = this.next;
      }
    }
    return min;
  }
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  toArray() {
    const length = this.size();
    const linkedListArr = [];
    let node = this.top;
    for (let i = 1; i <= length; i++) {
      linkedListArr.push(node.data);
      node = node.next;
    }
    return linkedListArr;
  }
  sort() {
    const linkedListArr = this.toArray();
    let sortedArr = linkedListArr;
    if (typeof linkedListArr[0] === "number") {
      sortedArr = linkedListArr.sort((a, b) => b - a);
    } else {
      sortedArr = linkedListArr.sort().reverse();
    }
    this.top = null;
    sortedArr.forEach((item) => this.push(item));
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  count() {
    return this.size;
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.findMax();
    return ++this.size;
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    this.findMax();
    return item.data;
  }
  toArray() {
    const length = this.size;
    const linkedListArr = [];
    let currentItem = this.first;
    for (let i = 1; i <= length; i++) {
      linkedListArr.push(currentItem.data);
      currentItem = currentItem.next;
    }
    return linkedListArr;
  }
  findMax() {
    const linkedListArr = this.toArray();
    return Math.max(...linkedListArr);
  }
  getLast() {
    return this.last;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
