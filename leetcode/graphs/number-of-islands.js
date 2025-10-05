
/**
 * @problem Number of Islands
 * Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * @example
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 * @solution
 * This is a classic graph traversal problem that can be solved with either DFS or BFS.
 * The main idea is to iterate through every cell of the grid. If we find a cell that is land ('1'), we know we've found the start of an island.
 *
 * 1. **Iterate and Count**: Loop through each row and column of the grid.
 * 2. **Find an Island**: If `grid[r][c]` is '1', it means we've discovered a new, unvisited island. Increment an `islandCount` variable.
 * 3. **Sink the Island (Flood Fill)**: To avoid recounting this same island, we need to find all its connected land parts and mark them as visited. We can do this with a traversal algorithm (DFS is common and easy to implement recursively).
 *    - Start a DFS from the current cell `(r, c)`.
 *    - The DFS function will:
 *      a) Check for boundary conditions (are we outside the grid?) or if the current cell is water ('0'). If so, stop.
 *      b) Mark the current cell as visited by changing its value from '1' to '0' (or another marker). This "sinks" the land part.
 *      c) Recursively call the DFS function for all four adjacent neighbors (up, down, left, right).
 * 4. **Continue Search**: Once the DFS completes, the entire island has been "sunk" and won't be counted again. The main loop continues its search for the next '1'.
 * 5. **Return Count**: After checking all cells, `islandCount` will hold the total number of islands.
 */
function numIslands(grid) {
  if (!grid || !grid.length) return 0;
  
  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r, c) {
    // Boundary checks and water check
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return;
    }
    
    // Mark the current cell as visited (sink it)
    grid[r][c] = '0';
    
    // Visit all four neighbors
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // Main loop to find islands
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        islandCount++;
        dfs(r, c); // Start the flood fill
      }
    }
  }
  
  return islandCount;
}

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // 3
