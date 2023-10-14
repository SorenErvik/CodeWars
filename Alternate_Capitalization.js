/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/


function capitalize(s){
    let evenCapitals = [];
    let oddCapitals = [];
    let answers = [];
    s = s.split('');
    
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenCapitals.push(s[i].toUpperCase());
      } else {
        evenCapitals.push(s[i]);
      }
    }
    
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 1) {
        oddCapitals.push(s[i].toUpperCase());
      } else {
        oddCapitals.push(s[i]);
      }
    }
    
    evenCapitals = evenCapitals.join("");
    oddCapitals = oddCapitals.join("");
    
    answers.push(evenCapitals, oddCapitals);
    
    return answers;
  };