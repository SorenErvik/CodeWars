/* 
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/


var capitals = function (word) {
	// Write your code here
  const arr = word.split('');
  const capitals = [];
  arr.forEach(function(element) {
    if (/[A-Z]/.test(element)) {
      const index = arr.indexOf(element);
      capitals.push(index);
    }
  });
  return capitals;
};