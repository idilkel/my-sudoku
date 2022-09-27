import { GRID, NUMBERS } from "../utils/types";

interface isInColProps {
  col: number;
  grid: GRID;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is already being used in the current column
 * @param input Object by 9x9 Sudoku grid, column index and value
 * @returns
 */
function isInCol({ col, grid, value }: isInColProps): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }
  return false;
}

export default isInCol;
