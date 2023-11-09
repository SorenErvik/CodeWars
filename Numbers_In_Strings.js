/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

function solve(s) {
    const arr = s.split(/[a-zA-Z]+/);
  
     arr.sort((a,b) => a - b);
    let num = parseInt(arr[arr.length - 1]);
    return num;
  };