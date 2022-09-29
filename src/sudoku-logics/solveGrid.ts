import global from "../global/global";
import { GRID, NUMBERS } from "../utils/types";
import checkGrid from "./checkGrid";
import identifyWorkingSquare from "./identify-square";
import isInCol from "./isInCol";
import isInRow from "./isInRow";
import isInSquare from "./isInSquare";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9x9 Sudoku grid with values 1-9
 */

function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      for (let value of numbers) {
        //no need to shuffle
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square = identifyWorkingSquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              //check grid if it is full, if yes, stop and return
              if (checkGrid(grid)) {
                //if the grid is full the global counter is 1
                global.counter++;
                break;
              } else if (solveGrid(grid)) {
                //if the grid is full return true
                return true;
              }
            }
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

export default solveGrid;
