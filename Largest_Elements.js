/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

function largest(n, array) {
    // Find the n highest elements in a list
    let sortedArr = array.sort((a,b) => b - a);
    return sortedArr.slice(0, n).sort((a,b) => a - b);
  }