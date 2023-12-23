/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

//PREP
//Parameters - We are given a single array that is atleast 3 indeces in length
//Returns - I need to return the distinct number that only appears once
//Examples - So [1,1,2] would return 2
//Pseudocode - 

function stray(numbers) {
    // Create a Set to find unique values
    let uniqueNums = new Set(numbers);
  
    // Convert the Set back to an array for indexing
    let uniqueArray = Array.from(uniqueNums);
  
    // Initialize counters
    let aSum = 0;
    let bSum = 0;
  
    // Count occurrences of unique values
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === uniqueArray[0]) {
        aSum++;
      } else if (numbers[i] === uniqueArray[1]) {
        bSum++;
      }
    }
  
    // Determine which value has occurred only once
    if (aSum === 1) {
      return uniqueArray[0];
    } else {
      return uniqueArray[1];
    }
  }