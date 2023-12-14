/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/



function toNumberArray(stringarray){
  
    //PREP
    //Paramaters - Our parameters are just strings but the strings can be whole numbers or floats. But Number will work on
    // "4" or "4.3"
    //Returns - We need to return an array, where all string numbers are convereted into numbers
    //Examples - So if the array was ['4', '33333', '4.5', '4542.485858884899484'] it should return -> 
    //[4,33333,4.5,4542.485858884899484]
    //Pseudocode - Create a new array and assign it the value of the a map function, going over each element in the 
    //stringarray and applying the Number() method to it
    
    //Creating an array named nums that has the value of the map function going over the stringarray arguement
    let nums = stringarray.map(function(string) {
      //each index in the string array, will have the Number() method applied to it
      return Number(string);
    })
    //This returns the nums array with the correct values
    return nums;
  }