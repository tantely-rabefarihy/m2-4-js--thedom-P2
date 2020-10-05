// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string as an argument and returns true if
// the string is a palindrome and false otherwise.
//
// - If the argument received is not a string, return undefined.
//
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function isPalindrome(theString) {
  // Your code here
  const alphanumericOnly = theString
    // 1) Lowercase the input
    .toLowerCase()
    // 2) Strip out non-alphanumeric characters
    .match(/[a-z0-9]/g);

  // 3) return string === reversedString
  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = isPalindrome;
