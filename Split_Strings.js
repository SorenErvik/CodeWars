/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    //split the string
   let arr = str.split("");
   let pairs = [];
   //loop through the array and add the pairs
   for (let i=0; i<arr.length; i++) {
     if (i === arr.length - 1 && arr.length % 2 !== 0) {
       pairs.push(arr[i] + "_");
     } else if (i % 2 === 0) {
       pairs.push(arr[i] + arr[i +1]);
     } 
   }
   return pairs;
   }