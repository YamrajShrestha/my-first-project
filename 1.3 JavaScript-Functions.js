// Function Declaration
function greet() {
  console.log("hello");
}
greet();

function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 2));

// Arrow Function
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(4, 2));

// Shortest version of Arrow Function
const divide = (a, b) => a / b;
console.log(divide(8, 2));

// Scop in JavaScript
// Global Scope
let x = 10;
function show() {
  console.log(x);
}
show();

// Function Scope
function test() {
  let y = 20;
}
test();

// Closures
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();

counter();
