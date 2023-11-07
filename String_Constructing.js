/*
Task
You are given two string a an s. Starting with an empty string we can do the following two operations:

 append the given string a to the end of the current string. erase one symbol of the current string. Your task is to find the least number of operations needed to construct the given string s. Assume that all the letters from s appear in a at least once.

Example
For a = "aba", s = "abbaab", the result should be 6.

Coinstruction:

"" -> "aba" -> "ab" -> "ababa" -> "abba" -> "abbaaba" -> "abbaab".

So, the result is 6.

For a = "aba", s = "a", the result should be 3.

Coinstruction:

"" -> "aba" -> "ab" -> "a".

So, the result is 3.

For a = "aba", s = "abaa", the result should be 4.

Coinstruction:

"" -> "aba" -> "abaaba" -> "abaab" -> "abaa".

So, the result is 4.
*/


function stringConstructing(a, s) {
    let i = 0;
    for (const c of s) {
      while (c !== a[i % a.length]) {
        i++;
      }
      i++;
    }
    
    const aLength = a.length;
    const sLength = s.length;
    return Math.ceil(i / aLength) * (aLength + 1) - sLength;
  }
  
  // Example usage
  console.log(stringConstructing("aba", "abbaab")); // Expected output: 6
  console.log(stringConstructing("aba", "a")); // Expected output: 3
  console.log(stringConstructing("aba", "abaa")); // Expected output: 4