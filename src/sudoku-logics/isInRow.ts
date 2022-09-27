import { GRID, NUMBERS } from "../utils/types";

interface isInRowProps {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is already being used in the current grid row
 * @param input Object with 9x9 Sudoku grid, row index and value
 * @returns
 */
function isInRow({ grid, row, value }: isInRowProps): boolean {
  return grid[row].includes(value);
}

export default isInRow;
