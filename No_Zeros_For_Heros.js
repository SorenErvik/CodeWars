/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/


function noBoringZeros(n) {
    // your code
    let numStr = n.toString();
    let numArr = numStr.split('');
    
    while (numArr[numArr.length -1] === "0") {
      numArr.pop();
    }
    let num = numArr.join('');
    let superNum = +num;
    return superNum;
  }