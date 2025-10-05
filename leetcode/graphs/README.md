
# Graphs (BFS/DFS)

## What are they?

A **Graph** is a non-linear data structure consisting of **nodes** (or vertices) and **edges** that connect them. Graphs are used to model relationships between objects.

There are two primary ways to traverse a graph:

- **Breadth-First Search (BFS):** Explores the graph layer by layer. It starts at a source node and explores all its immediate neighbors first, before moving on to the next level of neighbors.

- **Depth-First Search (DFS):** Explores the graph by going as deep as possible down one path before backtracking. It starts at a source node, explores one of its neighbors, then that neighbor's neighbor, and so on, until it hits a dead end. Then it backtracks to explore other paths.

## Real-World Analogy

Imagine you're exploring a maze.

- **BFS (like a ripple effect):** You start at the entrance. You first check all paths that are immediately accessible from where you are (1 step away). Then you check all paths that are 2 steps away, then 3 steps away, and so on. This is guaranteed to find you the **shortest path** out of the maze.

- **DFS (like following one path to its end):** You start at the entrance and pick one path. You follow it, making turns, until you hit a dead end. Only then do you backtrack to the last junction and try a different path. This is like using one hand to trace the wall of the maze until you find the exit.

## Common Uses

- **BFS** is often used for finding the shortest path between two nodes (e.g., in GPS navigation or finding the fewest moves in a puzzle).

- **DFS** is great for problems involving exploring all possibilities, such as finding all connected components (like in the "Number of Islands" problem), solving puzzles like Sudoku, or checking for cycles in a graph.
