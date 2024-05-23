const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the Stack class
class Stack {
  constructor(top = null) {
    this.top = top;
    this.count = 0;
  }
  push(data) {
    const newItem = new Node(data);
    if (!this.top) {
      this.top = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
    this.count++;
  }

  size() {
    let count = 0; // Initialize a counter to keep track of the number of nodes
    let node = this.top; // Start from the head of the linked list

    // Traverse the linked list until reaching the end (node is null)
    while (node) {
      count++; // Increment the counter
      node = node.next; // Move to the next node
    }

    return count; // Return the total number of nodes in the linked list
  }

  pop() {
    // Check if the stack is empty
    if (!this.top) {
      // If the stack is empty, throw an error
      throw new Error("The stack is empty");
    }

    // If the stack is not empty, proceed to pop an item
    let item = this.top; // Store the reference to the current top item

    if (item) {
      // If there is an item at the top of the stack
      let newItem = item.next; // Store the reference to the next item in the stack
      this.top = newItem; // Update the top of the stack to be the next item
      return item; // Return the popped item
    }
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  findMin() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    let current = this.top;
    let min = current.data; // Assume the top element is the minimum initially

    while (current) {
      if (current.data < min) {
        min = current.data; // Update min if a smaller value is found
      }
      current = current.next; // Move to the next node
    }

    return min;
  }

  sort() {
    // Create a temporary stack to hold sorted elements
    const tempStack = new Stack();

    // Loop until the original stack is empty
    while (!this.isEmpty()) {
      // Pop the top element from the original stack
      let tmp = this.pop();

      // Move elements from temporary stack to original stack until a correct position is found for the popped element
      while (!tempStack.isEmpty() && tempStack.peek().data > tmp.data) {
        this.push(tempStack.pop().data);
      }

      // Push the popped element to the correct position in the temporary stack
      tempStack.push(tmp.data);
    }

    // Move sorted elements back from the temporary stack to the original stack
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop().data);
    }
  }
}

// Define the Queue class
class Queue {
  constructor(maxValue = Number.MAX_SAFE_INTEGER) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = this.maxValue;
  }

  // Method to enqueue data into the queue
  enqueue(data) {
    let newItem = new Node(data);
    // If queue is empty, set new item as both first and last
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      // If queue is not empty, set last's next as new item and update last
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size; // Increment queue size
  }
  // Method to dequeue (remove and return) the first element from the queue
  dequeue() {
    if (!this.first) {
      throw new Error("The queue is empty");
    }

    let removedItem = this.first; // Store reference to first item
    if (this.first === this.last) {
      this.last = null; // If only one item, set last to null
    }
    this.first = this.first.next; // Update first to next item
    this.size--; // Decrement queue size
    return removedItem.data; // Return data of removed item
  }

  count() {
    return this.size;
  }

  // Method to check if queue is empty
  isEmpty() {
    return !this.first;
  }

  peek() {
    if (!this.first) {
      throw new Error("The stack is empty");
    }
    return this.first;
  }

  // get last
  getLast() {
    // Method to get the last node of the linked list
    let node = this.first; // Start from the first of the linked list
    if (!this.first) return null; // If the linked list is empty (no first), return null

    // Traverse the linked list until reaching the last node (where node.next is null)
    while (node.next) {
      node = node.next; // Move to the next node
    }

    return node; // Return the last node of the linked list
  }

  findMax() {
    if (!this.last) {
      throw new Error("The queue is empty");
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
}
module.exports = {
  Node,
  Queue,
  Stack,
};
