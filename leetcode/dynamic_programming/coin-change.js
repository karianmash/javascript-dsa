
/**
 * @problem Coin Change
 * You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * @example
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * @solution
 * This is a classic dynamic programming problem. We want to find the minimum number of coins for an amount, which can be built up from the minimum number of coins for smaller amounts.
 *
 * 1. **Create DP Array**: Create a DP array (let's call it `dp`) of size `amount + 1`. `dp[i]` will store the minimum number of coins needed to make the amount `i`.
 * 2. **Initialize**: Initialize all values in the `dp` array to a large number (like `Infinity`) to indicate that these amounts are not yet reachable. Set `dp[0] = 0`, because 0 coins are needed to make an amount of 0.
 * 3. **Iterate and Calculate**: We will use two loops.
 *    - The outer loop iterates through each `coin` in our `coins` array.
 *    - The inner loop iterates from the `coin` value up to the `amount`. For each amount `i`:
 *      - We can potentially form the amount `i` by taking a coin and adding it to a previously calculated amount `i - coin`.
 *      - The number of coins for this would be `dp[i - coin] + 1`.
 *      - We update `dp[i]` to be the minimum of its current value and this new value: `dp[i] = Math.min(dp[i], dp[i - coin] + 1)`.
 * 4. **Return Result**: After the loops complete, `dp[amount]` will hold the minimum number of coins for the target amount. If `dp[amount]` is still `Infinity`, it means the amount could not be formed, so we return -1.
 */
function coinChange(coins, amount) {
  // dp[i] will store the minimum coins for amount i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case
  
  // Iterate through each coin denomination
  for (let coin of coins) {
    // For each amount, see if this coin can contribute to a better solution
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  
  // If dp[amount] is still Infinity, it was not possible to make the amount
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1,2,5], 11)); // 3
console.log(coinChange([2], 3)); // -1
