
# Sliding Window

## What is it?

The **Sliding Window** technique is an algorithmic approach used to efficiently solve problems that involve finding a subarray or substring in an array or string that satisfies a certain condition.

The "window" is a sub-list or sub-string that runs over the data. The window can either be of a fixed size or a dynamic size. We "slide" the window by moving its start and end pointers, expanding or shrinking it as we go, to check for the condition.

This technique is highly efficient because it avoids re-computation. Instead of re-evaluating from scratch for every possible subarray, it reuses the calculation from the previous window.

## Real-World Analogy

Imagine you have a long train of freight cars, and each car has a number on it. Your task is to find the sequence of 3 consecutive cars with the highest total sum.

- **Brute-Force (slow way):** You would first sum cars #1, #2, #3. Then, you'd start over and sum cars #2, #3, #4. Then #3, #4, #5, and so on. You are doing a lot of redundant adding.

- **Sliding Window (fast way):**
  1. You start by summing the first 3 cars (your initial "window").
  2. To move to the next sequence, you don't start over. You simply **subtract the number of the car that is leaving the window (car #1)** and **add the number of the new car entering the window (car #4)**.
  3. This gives you the sum of cars #2, #3, #4 instantly.

You keep "sliding" your 3-car window down the train, one car at a time, by subtracting the outgoing element and adding the incoming one. This way, you only perform two operations for each step instead of re-summing the entire window, turning a potentially O(n*k) problem into a much faster O(n) one (where k is the size of the window).

This is used for problems like finding the maximum sum subarray of a certain size, or finding the shortest substring containing a set of characters.
