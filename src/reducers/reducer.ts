import { AnyAction } from "redux";
import createFullGrid from "../sudoku-logics/createFullGrid";

import { IReducer } from "./interfaces";
import * as types from "./types";

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      return { ...state, grid: createFullGrid() };
    }
    case types.SELECT_BLOCK: {
      return { ...state, selectedBlock: action.coords }; //action.coords from actions const select
    }
    default:
      return state;
  }
}

export default reducer;
