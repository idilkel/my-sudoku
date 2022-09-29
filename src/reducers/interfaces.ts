import { BLOCK_COORDS, GRID } from "../utils/types";

export interface IReducer {
  challengeGrid?: GRID; //optional
  selectedBlock?: BLOCK_COORDS;
  solvedGrid?: GRID;
  workingGrid?: GRID;
}
