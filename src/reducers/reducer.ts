import { AnyAction } from "redux";
import compareArrays from "../sudoku-logics/compareArrays";
import copyGrid from "../sudoku-logics/copyGrid";
import createFullGrid from "../sudoku-logics/createFullGrid";
import removeNumbers from "../sudoku-logics/removeNumbers";
import { GRID } from "../utils/types";

import { IReducer } from "./interfaces";
import * as types from "./types";

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      //for more difficult board change attempts to 10 instead of 5
      const challengeGrid = removeNumbers(gridCopy, 5);
      //working grid will be compared to solved grid to check if solution is correct
      const workingGrid = copyGrid(challengeGrid);
      return { ...state, challengeGrid, solvedGrid, workingGrid };
    }

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("Incorrect Option!");
          return state; //return state without updating
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert("Completed!");
        }
        //return a new working grid and not the existing one for future persist
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }

    case types.SELECT_BLOCK: {
      return { ...state, selectedBlock: action.coords }; //action.coords from actions const select
    }
    default:
      return state;
  }
}

export default reducer;
