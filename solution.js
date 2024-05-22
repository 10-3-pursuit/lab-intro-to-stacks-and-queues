const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(top = null){
    this.top = top
    this.count = 0
  }
  push(data){
    const newItem = new Node(data)
    if(!this.top){
      this.top = newItem
    } else {
      newItem.next = this.top
      this.top = newItem
    }
    this.count += 1
  }
  size(){
    return this.count
  }
  pop(){
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top
    let newTopItem = item.next
    this.top = newTopItem
    this.count -= 1
    return item
  }
  isEmpty(){
    return this.top === null
  }
  findMin(){
    const uniqueNums = new Set([])
    let currentItem = this.top
    for(let i = 1; i <= this.count; i++){
      uniqueNums.add(currentItem.data)
      currentItem = currentItem.next
    }
    return Math.min(...uniqueNums)
  }
  peek(){
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    return this.top
  }
  sort(){
    const dataArray = []
    let currentItem = this.top
    for(let i = 1; i <= this.count; i++){
      dataArray.push(currentItem.data)
      currentItem = currentItem.next
    }
    let sortedDataArray;
    if(dataArray.every((item) => typeof item === "number")){
      sortedDataArray = dataArray.sort((a, b) => b - a)
    } else {
      sortedDataArray = dataArray.sort((a, b) => b.localeCompare(a))
    }
    this.top = null
    for(let item of sortedDataArray){
      this.push(item)
    }
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    this.max = null
  }
  enqueue(data){
    const newItem = new Node(data)
    if(!this.first) {
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    this.size += 1
    this.max = this.findMax()
  }
  dequeue(){
    if(this.first === null){
      throw new Error("The queue is empty")
    }
    const item = this.first
    if(this.first === this.last){
      this.first === null
    } else {
      this.first = this.first.next
    }
    this.size -= 1
    this.max = this.findMax()
    return item.data
  }
  count(){
    return this.size
  }
  getLast(){
    return this.last
  }
  isEmpty(){
    return this.first === null
  }
  peek(){
    return this.first
  }
  toArray() {
    let arr = [];
    let currentItem = this.first;
    while (currentItem) {
      arr.push(currentItem.data);
      currentItem = currentItem.next;
    }
    return arr;
  }
  findMax(){
    const dataArray = this.toArray()
    return Math.max(...dataArray)
  }

}

module.exports = {
  Node,
  Queue,
  Stack,
};
