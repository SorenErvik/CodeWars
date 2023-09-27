/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/


function doubleChar(str) {
    // Your code here
    let arr = str.split('');
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
      newArr.push(arr[i], arr[i]);
    }
    return newArr.join('');
  }