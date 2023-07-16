/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

//PREP
//Parameters - The function will receive 2 parameters. Beast which is the name of the animal, and dish 
//which is the name of the dish. These will always be strings that are atleast 2 characters in length.
//Returns - This function needs to return true or false, true if the starting letter of the dish matches the starting letter 
// of the animal and the ending letter of the dish matches the ending letter of the animal, and false if either of those 
//conditions do not match the above mentioned conditions
// Examples - So if beast was 'bird' and dish was 'baked bread' we would return true and if the beast was 'bear' and the dish
//was 'green beans', it would return false
//Pseudocode - So I would do an  if else statement, and check charAt(0) and charAt(length - 1) for both dish and beast and 
//if they matched, they would return true, otherwise they return false

function feast(beast, dish) {
    //your function here
      //Here we are checking if the first and last letters match
      if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
        return true;
      } else {
        //Returning false if either of the letter conditionals do not match
        return false;
      }
    }