import { NUMBERS, SQUARE } from "../utils/types";

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is already being used in the current gride square.
 * @param input An object with three 3x3 squares and value
 * @returns
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value); //square_row 0,1,2 - the whole 2D array
}

export default isInSquare;
