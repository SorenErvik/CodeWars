/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function strChecker(str) {
let newStr = str.toLowerCase();
  let checker = [];
  for (let i=0; i<newStr.length; i++) {
    let counter = 0;
    checker.push(newStr[i]);
    for (let j=0; j < checker.length; j++) {
      if (newStr[i] === checker[j]){
        counter++;
      }
          if (counter > 1) {
      return false;
    }
    }
  }
  return true;
}


//Testing something 