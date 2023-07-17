/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.


*/


function divCon(x){
    //PREP
      //Parameters - The parameters will be either a number or a string number. 
      //Returns - We need to return the sum of the numbers minus the string numbers
      //Examples - So if our array was [9,5,"4","3"] the result would be 7 (14 - 7)
      //Pseudocode - Create a nums and stringNums variable and set them to 0. Then loop through the x array, and do an if else
      //statement determining if the number is a string or not. Then depending on what it is, add it to nums or string nums, then
      //return nums - stringnums
      
      
    
      let nums = 0;
    let stringNums = 0;
      
      for (let i=0; i<x.length; i++) {
        if (typeof x[i] === "string") {
          stringNums += Number(x[i]);
        } else if (typeof x[i] === "number") {
          nums += x[i];
        }
      }
      return nums - stringNums;
    }