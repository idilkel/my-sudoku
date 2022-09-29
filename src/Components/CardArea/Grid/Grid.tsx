import { FC, Children, useEffect, useCallback } from "react";
import useMouseTrap from "react-hook-mousetrap";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { createGrid, fillBlock, selectBlock } from "../../../reducers/actions";
import { IReducer } from "../../../reducers/interfaces";

import createFullGrid from "../../../sudoku-logics/createFullGrid";
import fillGrid from "../../../sudoku-logics/fillGrid";
import { BLOCK_COORDS, GRID, INDEX, N, NUMBERS } from "../../../utils/types";
import Block from "../Block/Block";
import "./Grid.css";

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue?: N;
  solvedGrid?: GRID;
}

function Grid(): JSX.Element {
  //   const grid: GRID = createFullGrid();
  //   console.log(grid);

  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock));
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

  //do something only if the selected block is selected
  //SelectedBlock has 2 elements: row at index 0 and col at index 1.
  //selectedBlock[0] is row  and selectedBlock[1] is column
  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
    }
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
    }
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  //mapping keyboard keys
  useMouseTrap("1", () => fill(1));
  useMouseTrap("2", () => fill(2));
  useMouseTrap("3", () => fill(3));
  useMouseTrap("4", () => fill(4));
  useMouseTrap("5", () => fill(5));
  useMouseTrap("6", () => fill(6));
  useMouseTrap("7", () => fill(7));
  useMouseTrap("8", () => fill(8));
  useMouseTrap("9", () => fill(9));
  useMouseTrap("down", moveDown);
  useMouseTrap("left", moveLeft);
  useMouseTrap("right", moveRight);
  useMouseTrap("up", moveUp);

  useEffect(() => {
    if (!state.solvedGrid) {
      create();
    }
  }, [create, state.solvedGrid]);

  return (
    <div className="Container" data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, colIndex) => (
          <div className="Column" data-cy="grid-column-container">
            <Block rowIndex={0} colIndex={colIndex as INDEX} />
            <Block rowIndex={1} colIndex={colIndex as INDEX} />
            <Block rowIndex={2} colIndex={colIndex as INDEX} />
            <Block rowIndex={3} colIndex={colIndex as INDEX} />
            <Block rowIndex={4} colIndex={colIndex as INDEX} />
            <Block rowIndex={5} colIndex={colIndex as INDEX} />
            <Block rowIndex={6} colIndex={colIndex as INDEX} />
            <Block rowIndex={7} colIndex={colIndex as INDEX} />
            <Block rowIndex={8} colIndex={colIndex as INDEX} />
            {/* {Children.toArray(
              [...Array(9)].map((_, rowIndex) => (
                <Block rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX} />
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
