import { useDispatch, useSelector } from "react-redux";
import { IReducer } from "../../../reducers/interfaces";
import { BLOCK_COORDS, N, NUMBERS } from "../../../utils/types";
import { AnyAction, Dispatch } from "redux";
import "./NumberButton.css";
import { useCallback } from "react";
import { fillBlock } from "../../../reducers/actions";

interface NumberButtonProps {
  value: NUMBERS;
}

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

function NumberButton(props: NumberButtonProps): JSX.Element {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(props.value, state.selectedBlock));
    }
  }, [dispatch, state.selectedBlock, state.selectedValue]);
  return (
    <div className="NumberButton Button" onClick={fill}>
      {props.value}
    </div>
  );
}

export default NumberButton;
