import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IReducer } from "../../../reducers/interfaces";

import { N } from "../../../utils/types";
import "./Block.css";

interface BlockProps {
  rowIndex: number;
  colIndex: number;
}

interface IState {
  value: N;
}

function Block(props: BlockProps): JSX.Element {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[props.rowIndex][props.colIndex] : 0,
    // value: 0,
  }));
  return (
    <div
      className="Block"
      data-cy={`block-${props.rowIndex}-${props.colIndex}`}
    >
      {state.value === 0 ? "" : state.value}
      {/* {props.rowIndex} */}
      {/* |{props.rowIndex} {props.colIndex}| */}
    </div>
  );
}

export default Block;
