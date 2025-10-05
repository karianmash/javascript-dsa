
# Two Pointers

## What is it?

The **Two Pointers** technique is a common and efficient strategy used to solve problems involving sorted arrays or linked lists. It involves using two pointers to iterate through the data structure, moving them towards each other, away from each other, or in the same direction.

This method is powerful because it can often reduce the time complexity of a problem from O(n^2) to O(n) by avoiding nested loops.

## Real-World Analogy

Imagine you and a friend are reading the same book from opposite ends. You start at the first page (the "left pointer") and your friend starts at the last page (the "right pointer").

Your goal is to find two specific pages that, when combined, have a certain property (e.g., their page numbers add up to 100).

Instead of you checking your page against every other page in the book (a slow, O(n^2) process), you can work together:

- You read your page number, and your friend reads theirs.
- If the sum is too low, you move to the next page (incrementing the left pointer).
- If the sum is too high, your friend moves to the previous page (decrementing the right pointer).

You continue this process, moving one pointer at a time, until you meet in the middle or find the pages you're looking for. This coordinated search is far more efficient, just like the two-pointers algorithm.

Common patterns include:
- **Opposite Ends:** Pointers start at the beginning and end of an array and move towards the middle (e.g., for finding pairs in a sorted array).
- **Same Direction (Fast/Slow):** One pointer moves faster than the other (e.g., for detecting cycles in a linked list).
