import { BLOCK_COORDS, GRID } from "../utils/types";

export interface IReducer {
  grid?: GRID; //optional
  selectedBlock?: BLOCK_COORDS;
}
