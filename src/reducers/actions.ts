import { Action, AnyAction } from "redux";
import { BLOCK_COORDS } from "../utils/types";

import * as types from "./types";

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});
