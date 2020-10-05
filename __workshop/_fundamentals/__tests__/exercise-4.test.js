// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  expect(
    count(
      [
        { name: "Bob", amount: 200 },
        { name: "Josie", amount: 10 },
      ],
      "amount"
    )
  ).toBe(210);
  expect(
    count(
      [
        { name: "Tom", amount: 5 },
        { name: "Sawyer", amount: 30 },
      ],
      "amount"
    )
  ).toBe(35);
  expect(
    count(
      [
        { name: "Jeff", amount: 1000 },
        { name: "Goldblum", amount: 50 },
      ],
      "amount"
    )
  ).toBe(1050);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
