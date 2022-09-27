import { FC, Children, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { createGrid } from "../../../reducers/actions";

import createFullGrid from "../../../sudoku-logics/createFullGrid";
import fillGrid from "../../../sudoku-logics/fillGrid";
import { GRID } from "../../../utils/types";
import Block from "../Block/Block";
import "./Grid.css";

function Grid(): JSX.Element {
  //   const grid: GRID = createFullGrid();
  //   console.log(grid);

  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  return (
    <div className="Container" data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, colIndex) => (
          <div className="Column" data-cy="grid-column-container">
            <Block rowIndex={0} colIndex={colIndex} />
            <Block rowIndex={1} colIndex={colIndex} />
            <Block rowIndex={2} colIndex={colIndex} />
            <Block rowIndex={3} colIndex={colIndex} />
            <Block rowIndex={4} colIndex={colIndex} />
            <Block rowIndex={5} colIndex={colIndex} />
            <Block rowIndex={6} colIndex={colIndex} />
            <Block rowIndex={7} colIndex={colIndex} />
            <Block rowIndex={8} colIndex={colIndex} />
            {/* {Children.toArray(
              [...Array(9)].map((_, rowIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )} */}
          </div>
        ))
      )}
    </div>
  );
}

export default Grid;

// const grid: GRID = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ];
//   fillGrid(grid);
//   console.log(grid);
