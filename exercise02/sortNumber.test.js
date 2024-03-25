// 1. Implement Expect Function ✓ ✕
// 2. Implement Test Function
const sortNumber = require("../exercise01/sortNumber");

function test(title, callback) {
  // TODO: Implement Code
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`✕ ${title}`);
    console.log(error);
  }
}

function expect(result) {
  // TODO: Implement Code
  return {
    toBe: function (expected) {
      if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected} but got ${result}`);
      }
    },
  }
}

// Example unit test
test("test that (c > b > a) must return sorted arr", () => {
  expect(sortNumber(3, 2, 1)).toBe([1, 2, 3]);
});

// TODO: List some other testcases here...

test("test that (a > b > c) must return sorted arr", () => {
  expect(sortNumber(1, 2, 3)).toBe([1, 2, 3]);
});

test("test that (b > c > a) must return sorted arr", () => {
  expect(sortNumber(2, 3, 1)).toBe([1, 2, 3]);
});

test("test that (c > a > b) must return sorted arr", () => {
  expect(sortNumber(3, 1, 2)).toBe([1, 2, 3]);
});

test("test with negative numbers", () => {
  expect(sortNumber(-3, -2, -1)).toBe([-3, -2, -1]);
});
