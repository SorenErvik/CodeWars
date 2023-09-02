/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/


String.prototype.isUpperCase = function() {
    // Loop through each character in the string
    for (let i = 0; i < this.length; i++) {
      // If any character is not equal to its uppercase version, return false
      if (this[i] !== this[i].toUpperCase()) {
        return false;
      }
    }
    // If all characters are uppercase or the string is empty, return true
    return true;
  };