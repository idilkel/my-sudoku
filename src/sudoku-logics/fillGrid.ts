import shuffle from "./shuffle";
import { GRID, NUMBERS } from "../utils/types";
import isInRow from "./isInRow";
import isInCol from "./isInCol";
import identifyWorkingSquare from "./identify-square";
import isInSquare from "./isInSquare";
import checkGrid from "./checkGrid";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9x9 Sudoku grid
 */

// function fillGrid(grid: GRID) {
const fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    //recursive loop
    if (grid[row][col] === 0) {
      shuffle(numbers);
      for (let value of numbers) {
        //is it not in the grid row?
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            //is it not in the grid column?
            // const square = [
            //   [0, 0, 0],
            //   [0, 0, 0],
            //   [0, 0, 0],
            // ]
            const square = identifyWorkingSquare({ col, grid, row });
            //is it not in the grid square?
            if (!isInSquare({ square, value })) {
              //.....if this is the case
              grid[row][col] = value;
              //check grid if it is full, if yes, stop and return
              if (checkGrid(grid)) {
                return true;
              }
              //otherwise we run fillGrid(grid)
              else if (fillGrid(grid)) {
                return true;
              }
            }
          }
      }
      break;
    }
  }

  grid[row][col] = 0;
};
export default fillGrid;

// const gridExample = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ]
