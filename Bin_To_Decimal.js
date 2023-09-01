/* 
Complete the function which converts a binary number (given as a string) to a decimal number.
*/


function binToDec(bin) {
    let ones = 0; // Initialize ones to 0
    for (let i = 0; i < bin.length; i++) {
      if (bin.charAt(i) === "1") {
        ones++; // Increment ones when encountering "1"
      }
    }
    // Convert the binary string to decimal using parseInt and specify base 2
    return parseInt(bin, 2);
  }