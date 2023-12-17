/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer


*/

//PREP
//Parameters- We are given 2 parameters, volume and side. They will both be integers but they could be positive or negative
//Returns- We will simply return true or false. True if side * side * side === volume and volume and side are both 
// greater than 0
//Examples- (8,3) would return false, (8,2) would return true, (8,-2) would return false 
//Pseudocode- Do an if else, and check if side * side * side === volume and volume > 0 and side > 0.

//Our function with our 2 parameters
var cubeChecker = function(volume, side){
    //If else statement that checks if our conditionals are met
    if (volume === (side * side * side) && volume > 0 && side > 0) {
      return true;
    } else {
      return false;
    }
  };