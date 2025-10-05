
# Stacks & Queues

## What are they?

**Stacks** and **Queues** are linear data structures that manage how data is added and removed.

- **Stack (LIFO):** A stack follows a **Last-In, First-Out (LIFO)** principle. The last item you add is the first one you can take out.

- **Queue (FIFO):** A queue follows a **First-In, First-Out (FIFO)** principle. The first item you add is the first one you can take out.

## Real-World Analogy

- **Stack:** Think of a stack of plates. You add a new plate to the top (`push`), and when you need a plate, you take one from the top (`pop`). You can't easily take a plate from the bottom without disturbing the whole stack.

- **Queue:** Think of a line at a checkout counter. The first person to get in line (`enqueue`) is the first person to be served (`dequeue`). New people join at the end of the line.

## Common Uses

- **Stacks** are excellent for problems involving reversing order, parsing expressions (like the "Valid Parentheses" problem), or managing function calls in recursion (the "call stack").

- **Queues** are ideal for processing items in the order they were received, such as in Breadth-First Search (BFS) algorithms for graphs or managing tasks in the background.
