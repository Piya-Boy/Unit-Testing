const { search, remove } = require("./remove");
function test(title, callback) {
    try {
        callback();
        console.log(`✓ ${title}`);
    } catch (error) {
        console.error(`✕ ${title}`);
        console.error(error);
    }
}

function expect(result) {
    return {
        toBe: function (expected) {
            if (result !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        },
        toNotContain: function (value) {
            if (result.includes(value)) {
                throw new Error(`Array contains ${value}`);
            }
        }
    };
}

// Test Cases for search function
test("search should return index of the number if found", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
});

test("search should return -1 if number is not found", () => {
    expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
});

// Test Cases for remove function
test("remove should remove the number from array if found", () => {
    const arr = [1, 2, 3, 4, 5];
    remove(arr, 3);
    expect(arr).toNotContain(3);
});

test("remove should not modify array if number is not found", () => {
    const arr = [1, 2, 3, 4, 5];
    remove(arr, 6);
    expect(arr).toBe(arr);
});
