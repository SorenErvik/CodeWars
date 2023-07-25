/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    //split the string into an array by non characters
      if (!str) {
        return "";
      }
      let arr = str.split(/[^a-zA-Z]+/);
      let capitalizedArr = arr.map((word, index) => {
        if (index > 0) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return word;
        }
                                   })
      return capitalizedArr.join("");
    }