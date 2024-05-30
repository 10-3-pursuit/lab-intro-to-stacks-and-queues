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
}

module.exports = {
  Node,
  // Queue,
  Stack,
};
