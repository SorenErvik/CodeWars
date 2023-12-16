/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
*/


function duckDuckGoose(players, goose) {
    //PREP
    //Paramaters - So there are only 2 parameters, players and goose. players will be a string, while goose will be a number.
    //Returns - We are looking to return a single letter. The letter represents the name of the kid that was chosen by the game
    //Example - if our arr was [a,b,c] and the goose was 2, the correct return would be 'b'
    //Pseudocode 
     // Have our array, determine how many times we need to iterate over our array (this is done with goose) 
     //and iterate through the array to determine what player was picked
    
    
    //check if goose is greater than or equal to players.length; if it is, return players[goose - 1].name;
    if (players.length >= goose) {
      return players[goose - 1].name;
    } else if (players.length < goose) {
      let remainder = (goose -1) % players.length;
      return players[remainder].name;
    }
  }