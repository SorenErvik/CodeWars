/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//PREP
//Parameters - The parameter will be a single array of numbers.
//Returns - We will return the number that has the longest "length" of characters
//Examples - if we got [1,22,44444] we would return 44444
//Pseudocode - Create 2 variables, one has the length of the first index in the array and the other has the value of the 
//first index in the array. Loop through the array, and if the length of the current element is longer, then swap the values
//in both variables


function findLongest(array){
    // code here
    let longest = array[0].toString().length;
    let longestNum = array[0];
    for (let i=0; i<array.length; i++) {
      if (array[i].toString().length > longest) {
        longest = array[i].toString().length;
        longestNum = array[i];
      } 
    }
    return longestNum; 
  }