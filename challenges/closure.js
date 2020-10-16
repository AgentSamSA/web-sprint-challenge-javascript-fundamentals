// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//nestFunction can access the variable internal because of closure. An internal or nested function has access to the parent function's scope at all times, regardless of the state of the parent function (such as after it has "closed", or the code has been completely passed through).

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let totalSum = 0;
  for (let i = 1; i <= num; i++) {
    totalSum += i;
  }
  return totalSum;
}

console.log(summation(10));