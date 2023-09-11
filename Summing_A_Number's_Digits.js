/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
*/


function sumDigits(number) {
    number = Math.abs(number);
  let sum = 0;
  while (number > 0) {
      sum += number % 10; // Add the last digit to the sum
      number = Math.floor(number / 10); // Remove the last digit
  }
  return Math.abs(sum);
  }