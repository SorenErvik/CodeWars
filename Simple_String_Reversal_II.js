/*
In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

The first index a will always be lower that than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!
*/

function solve(st,a,b){
    //..
     //turn it into an array
     let arr = st.split("");
     let deleteCount = b - a + 1;
     let extractedPart = arr.splice(a,deleteCount);
   
     extractedPart = extractedPart.reverse();
    extractedPart = extractedPart.join("");
    arr.splice(a,0,extractedPart);
     return arr.join("");
     return arr;
   }