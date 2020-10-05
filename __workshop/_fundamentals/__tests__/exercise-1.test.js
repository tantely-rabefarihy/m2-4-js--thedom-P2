// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  // add more tests here...
  expect(convertToString([20, 43, 23])).toStrictEqual(["20", "43", "23"]);
  expect(convertToString(["hello", 120])).toStrictEqual(["hello", "120"]);
  expect(convertToString([76, "hey"])).toStrictEqual(["76", "hey"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
