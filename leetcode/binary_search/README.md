
# Binary Search

## What is it?

**Binary Search** is a highly efficient searching algorithm that works on **sorted** arrays. It follows a divide-and-conquer strategy to find the position of a target value.

The algorithm repeatedly divides the search interval in half. If the value of the search key is less than the item in the middle of the interval, it narrows the interval to the lower half. Otherwise, it narrows it to the upper half. This process continues until the value is found or the interval is empty.

## Real-World Analogy

Imagine you're looking for a specific word in a physical dictionary. The dictionary is sorted alphabetically.

- You don't start at the first page and read every word (that would be a Linear Search).
- Instead, you open the dictionary to the **middle**.
- You look at the word on that page. If your target word comes alphabetically **before** the word on the page, you know your word is in the first half of the dictionary. You can ignore the entire second half.
- If your word comes **after**, you know it's in the second half, and you can ignore the first half.

You repeat this process—taking the remaining section, opening it to the middle, and eliminating half—until you zero in on the exact page your word is on. This is significantly faster than a linear scan.

Binary search is extremely powerful, reducing the search time on an array of `n` elements from O(n) to O(log n).
