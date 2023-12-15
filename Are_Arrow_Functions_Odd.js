/*
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

//PREP
//Parameters - The parameter will only be an array that is either empty, or an array of numbers.
//Returns - We need to return an empty array if the parameter is an empty array or the array just has even numbers
//otherwise, return a new array of the odd numbers
//Examples - So if we were given [], it would return []. If we were given [2,6,8,222], it would return []. If we were given
//[1,3,4,6,7,9] it would return [1,3,7,9].
//Pseudocode - Make a function that uses the filter method and returns any numbers that %2 !== 0


//Our function with the paramater
function odds(values){
    // arrow it
    //Our arrow function that calls the filter method on the array and returns any odd numbers
    return values.filter(number => number % 2 !== 0 );
  }