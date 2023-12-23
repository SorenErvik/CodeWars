/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

//PREP
//Parameters - The paramater will just be a number.
//Returns - We will return the number * 5^the length of the number.
//Examples - So 3 would return 15.
//Pseudocode - Arr = (num + "").split(""). let num = Math.pow(5, arr.length); return number * num;


function multiply(number){
    //Create our array that way we can see length
      let arr = (number + "").split("");
      //If the number was negative, this handles the negative in the array
      if (arr[0] === '-') {
        return number * (5**(arr.length -1));
      }
      //Return the appropriate number
     return number * (5**arr.length);
    
    }