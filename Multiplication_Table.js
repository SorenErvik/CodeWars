/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/


multiplicationTable = function(size) {
    // insert code here
    let multipliers = [];
    let multiples = [];
    let answers = [];
    
    for (let i = 0; i < size; i++) {
      multipliers.push(i + 1);
      multiples.push(i + 1);
    }
    
    for (let i = 0; i < multiples.length; i++) {
      let answerSet = [];
      for (let j = 0; j < multipliers.length; j++) {
        
        answerSet.push(multiples[i] * multipliers[j]);
      }
      answers.push(answerSet);
    }
    return answers;
  }
  