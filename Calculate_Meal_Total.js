/*
Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
*/

//PREP
//Parameters - We will get 3 parameters that will represent the subtotal, the tax percentage and the tip percentage
//Returns - We want to return the total of the meal
//Examples - 5,5,10 would return 5.75
//Pseudocode - Add subtotal + subtotal * tax + subtotal * tip

function calculate_total(subtotal, tax, tip) {
    // Your code here
      return Number((subtotal + (subtotal * (tax / 100)) + (subtotal * (tip / 100))).toFixed(2)); 
    }