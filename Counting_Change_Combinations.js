/*
Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0
*/

function countChange(money, coins) {
    let noDupes = new Set();
  
    function recursiveFunction(money, coins, combination) {
      // Base case: check if the problem is simple enough to solve directly
      if (money === 0) {
        noDupes.add(combination);
        return 1;
      } else if (money < 0 || coins.length === 0) {
        return 0; // This path won't lead to a valid combination
      } else {
        // Recursive case: break the problem down into smaller parts
        const useCurrentCoin = recursiveFunction(
          money - coins[0],
          coins,
          combination + coins[0]
        );
        const skipCurrentCoin = recursiveFunction(money, coins.slice(1), combination);
  
        // Calculate the total combinations for this branch
        return useCurrentCoin + skipCurrentCoin;
      }
    }
  
    recursiveFunction(money, coins, '');
  
    return noDupes.size;
  }
  