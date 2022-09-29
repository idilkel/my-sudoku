import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import { createGrid } from "../../../reducers/actions";
import NumberButton from "../NumberButton/NumberButton";
import "./NewButton.css";

function NewButton(): JSX.Element {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm("Are you sure you want to start a new game?"))
      dispatch(createGrid());
  }, [dispatch]);
  return (
    <div className="NewButton">
      <button className="Button" onClick={createNewGrid}>
        New Game
      </button>
    </div>
  );
}

export default NewButton;
