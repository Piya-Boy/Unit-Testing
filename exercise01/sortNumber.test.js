const sortNumber = require("./sortNumber");

// 1. Write down a list of possible testcases (comments)
// 2. For each testcases, check if the result is correct (if-statement)
// 3. Implement Code and Run the test, Iterate until all testcases pass

// Test cases:
// Test case 1: All numbers are in ascending order
const testCase1 = sortNumber(1, 2, 3);
if (JSON.stringify(testCase1) === JSON.stringify([1, 2, 3])) {
    console.log("Test case 1 passed");
} else {
    console.log("Test case 1 failed");
}

// Test case 2: All numbers are in descending order
const testCase2 = sortNumber(3, 2, 1);
if (JSON.stringify(testCase2) === JSON.stringify([1, 2, 3])) {
    console.log("Test case 2 passed");
} else {
    console.log("Test case 2 failed");
}

// Test case 3: Two numbers are the same
const testCase3 = sortNumber(2, 3, 2);
if (JSON.stringify(testCase3) === JSON.stringify([2, 2, 3])) {
    console.log("Test case 3 passed");
} else {
    console.log("Test case 3 failed");
}

// Test case 4: Negative numbers
const testCase4 = sortNumber(-3, -2, -1);
if (JSON.stringify(testCase4) === JSON.stringify([-3, -2, -1])) {
    console.log("Test case 4 passed");
} else {
    console.log("Test case 4 failed");
}