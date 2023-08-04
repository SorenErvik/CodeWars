/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Parse the date strings into Date objects
    const currentDateObj = new Date(currentDate);
    const expirationDateObj = new Date(expirationDate);
  
    // Check if the entered code is correct
    const isCodeCorrect = enteredCode === correctCode;
  
    // Check if the current date is before or equal to the expiration date
    const isDateValid = currentDateObj <= expirationDateObj;
  
    // Return true if both the code and date are valid, otherwise return false
    return isCodeCorrect && isDateValid;
  }
  