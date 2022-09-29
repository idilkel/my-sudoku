import global from "../global/global";
import { GRID } from "../utils/types";
import copyGrid from "./copyGrid";
import getRandomIndex from "./getRandomIndex";
import solveGrid from "./solveGrid";

/**
 * Removes numbers from a full grid to create a Sudoku puzzle
 * Exchanging numbers with 0 while it is still possible to solve the grid
 * If it is impossible, the removed number is returned
 * @param grid 9x9 Sudoku grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    //if it is already 0 find another one
    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];

    grid[row][col] = 0;

    //copy grid
    const gridCopy = copyGrid(grid);
    //set a global counter
    global.counter = 0;

    //attempt to solve the grid
    solveGrid(gridCopy);

    //if the global counter is not 1 then grid[row][col] will be set back to backup
    //grid[row][col] = backup
    //decrement attempts
    //try the whole process again and remove a different block
    //global counter ===1 when the grid is solved
    //if it was impossible to solve after removing the number, return the number back
    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
}

export default removeNumbers;
