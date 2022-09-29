import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { selectBlock } from "../../../reducers/actions";
import { IReducer } from "../../../reducers/interfaces";

import { INDEX, N } from "../../../utils/types";

import "./Block.css";

interface BlockProps {
  rowIndex: INDEX;
  colIndex: INDEX;
}

interface IState {
  isActive: boolean;
  isPuzzle: boolean;
  value: N;
}

function Block(props: BlockProps): JSX.Element {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === props.rowIndex &&
          selectedBlock[1] === props.colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[props.rowIndex][props.colIndex] !== 0
          ? true
          : false,
      value: workingGrid ? workingGrid[props.rowIndex][props.colIndex] : 0,
      // value: 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([props.rowIndex, props.colIndex]));
    }
  }
  return (
    <div
      className={
        `${state.isActive ? "Block-Active" : "Block"}` +
        " " +
        `${state.isPuzzle ? "Block-Puzzle" : ""}`
      }
      //   active={state.isActive}
      data-cy={`block-${props.rowIndex}-${props.colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? "" : state.value}
      {/* {props.rowIndex} */}
      {/* |{props.rowIndex} {props.colIndex}| */}
    </div>
  );
}

export default Block;
