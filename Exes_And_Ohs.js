/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


function XO(str) {
    //code here
  let x = 0;
  let o = 0;
  
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "x") {
      x++;
    } else if (arr[i].toLowerCase() === "o") {
      o++;
    } 
  }

  if (x === o) { 
  return true;
  }
  else {
    return false;
  }

}