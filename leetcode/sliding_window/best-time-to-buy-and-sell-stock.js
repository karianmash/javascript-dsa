
/**
 * @problem
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @example
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * @solution
 * This problem can be framed as finding the largest difference between two numbers in the array, where the smaller number (buy price) appears before the larger number (sell price). We can solve this efficiently with a sliding window approach, although it looks more like a simple two-pointer iteration in this case.
 *
 * 1. **Initialize Pointers and Max Profit**: We use a `left` pointer for the buy day and a `right` pointer for the sell day. Let's initialize `left = 0`, `right = 1`, and `maxProfit = 0`.
 * 2. **Iterate Through Prices**: We will iterate the `right` pointer from the second day to the end of the array.
 * 3. **Check for a New Low Price**: In each iteration, we check if the current `prices[right]` is a better buy price than `prices[left]`. If `prices[right]` is less than `prices[left]`, it means we've found a new, lower price to buy at. So, we should update our buy day by moving the `left` pointer to the `right` pointer's position. This is like sliding the start of our window forward because the old start was not profitable.
 * 4. **Calculate Profit**: If `prices[right]` is not less than `prices[left]`, we calculate the potential profit: `profit = prices[right] - prices[left]`.
 * 5. **Update Max Profit**: We then update our `maxProfit` with this potential profit if it's higher than the current `maxProfit`.
 * 6. **Continue and Return**: We continue this process, moving the `right` pointer until we've checked all possible sell days. Finally, we return `maxProfit`.
 *
 * This approach is O(n) because we iterate through the array only once.
 */

const maxProfit = (prices) => {
  let left = 0; // Buy pointer
  let right = 1; // Sell pointer
  let maxProfit = 0;

  while (right < prices.length) {
    // If we find a price lower than our current buy price, it's a better time to buy.
    // So, we move our buy pointer to this new low.
    if (prices[left] > prices[right]) {
      left = right;
    } else {
      // Otherwise, we calculate the profit if we were to sell today.
      const profit = prices[right] - prices[left];
      // And update our max profit if this is the best we've seen.
      maxProfit = Math.max(maxProfit, profit);
    }
    // Move to the next day to consider it as a sell day.
    right++;
  }

  return maxProfit;
};

// Example Usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(`Input: prices = [${prices}]`);
const result = maxProfit(prices);
console.log(`Output: ${result}`); // Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(`Input: prices = [${prices2}]`);
const result2 = maxProfit(prices2);
console.log(`Output: ${result2}`); // Output: 0
