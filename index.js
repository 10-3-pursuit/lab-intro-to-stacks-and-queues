// testing both Stack and Queue files
const Stack = require('./Stack');
const Queue = require('./Queue');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
];

const numStack = new Stack();
nums.forEach(num => numStack.push(num));
console.log('Stack size:', numStack.size());