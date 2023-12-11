/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let testArr = [...array];
    let testArr2 = [...array];
    let ascendedSort = testArr.slice().sort((a,b) => a -b);
    let descendedSort = testArr.slice().sort((a,b)=> b - a);
    
    if (array.join("") === ascendedSort.join("")) {
      return 'yes, ascending';
    } else if (array.join("") === descendedSort.join("")) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }