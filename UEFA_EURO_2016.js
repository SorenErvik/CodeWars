/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

//PREP
//Parameters - We will get 2 paramaters, the first parameter is an array with 2 strings, the 2 countries that played the match
// and the second parameter is an array with 2 numbers. The two scores of the teams.
//Returns - We need to return an announcement that talks about which team won or if they played a draw.
//Examples - If we got ([`USA`,`Brazil`], [5,0]) we would return `At match USA - Brazil, USA won!`
//Pseudocode - create a finalScore variable that will hold the final part of the string. do an if else to determine who won
// or if there was a draw. Then return a string that gives us our response

function uefaEuro2016(teams, scores){
    // your code...
    //finalScore will be the placeholder for the winner strig
    let finalScore = "";
    
    //if else statement that determines a winner
    if (scores[0] > scores[1]) {
      finalScore = `${teams[0]} won!`;
    } else if (scores[0] < scores[1]) {
      finalScore = `${teams[1]} won!`;
    } else if (scores[0] === scores[1]) {
      finalScore = `teams played draw.`
    }
    
    //returning a string that gives us our announcement
    return `At match ${teams[0]} - ${teams[1]}, ${finalScore}`;
  }