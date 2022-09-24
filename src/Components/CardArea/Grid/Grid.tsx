import { Children } from "react";
import Block from "../Block/Block";
import "./Grid.css";

function Grid(): JSX.Element {
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
