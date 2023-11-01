/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove (string) {
    //coding and coding....
    let arr = string.split("");
    if (arr[arr.length - 1] === "!") {
      arr.splice(-1);
      return arr.join("");
    } else {
      return string;
    }
  }