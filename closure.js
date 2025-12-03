// outer variable being used by inner function
function outer() {
  let message = "Hello from closure!";

  function inner() {
    console.log(message);
  }
  return inner;
}
const myClosure = outer();
myClosure(); // Outputs: Hello from closure!

// Closure keeps track of the count even after outer function ends
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter(); // Outputs: 1
counter(); // Outputs: 2
counter(); // Outputs: 3

// closures help create private data (not accessible directly)
function createBankAccount() {
  let balance = 100;

  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount();

account.deposit(50);
console.log(account.getBalance()); // Outputs: 150

console.log(account.balance);
