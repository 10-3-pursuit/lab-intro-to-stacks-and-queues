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
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  size() {
    let count = 1;
    let current = this.top;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }
  pop() {
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let min = this.top.data;
    let item = this.top;
    while (item.next) {
      item = item.next;
      min = min < item.data ? min : item.data;
    }
    return min;
  }
  peek() {
    return this.top;
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
    let count = 1;
    let item = this.first;
    while (item.next) {
      item = item.next;
      count++;
    }
    return count;
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
    return item.data;
  }
  findMax() {
    let max = this.first.data;
    let item = this.first;
    while (item.next) {
      item = item.next;
      max = max > item.data ? max : item.data;
    }
    return max;
  }

}

module.exports = {
  Node,
  Queue,
  Stack,
};
