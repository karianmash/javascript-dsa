
# Dynamic Programming (DP)

## What is it?

**Dynamic Programming** is an algorithmic technique for solving complex problems by breaking them down into simpler, overlapping subproblems. The key idea is to solve each subproblem only once and store its result. When the same subproblem is encountered again, you simply look up the stored result instead of re-computing it.

This method is a powerful optimization strategy that avoids redundant work.

## Real-World Analogy

Imagine you need to calculate the 50th number in the Fibonacci sequence. The rule is `Fib(n) = Fib(n-1) + Fib(n-2)`.

- **A naive (recursive) approach:** To get `Fib(50)`, you need `Fib(49)` and `Fib(48)`. To get `Fib(49)`, you need `Fib(48)` and `Fib(47)`. Notice that `Fib(48)` is being calculated twice. This redundancy grows exponentially, making the process incredibly slow.

- **A Dynamic Programming approach:** You start from the beginning. 
  1. `Fib(0) = 0`
  2. `Fib(1) = 1`
  3. `Fib(2) = Fib(1) + Fib(0) = 1`. You **store** this result.
  4. `Fib(3) = Fib(2) + Fib(1) = 1 + 1 = 2`. You use the stored result for `Fib(2)`.

You build up your solutions from the bottom, storing each result in a table (like an array or map). By the time you need to calculate `Fib(50)`, the results for `Fib(49)` and `Fib(48)` are already computed and available for instant lookup.

DP is often used for optimization problems, such as finding the shortest path, the best way to do something, or the minimum number of steps to reach a goal.
