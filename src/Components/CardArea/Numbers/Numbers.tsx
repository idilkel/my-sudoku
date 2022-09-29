import { BLOCK_COORDS, N, NUMBERS } from "../../../utils/types";
import NumberButton from "../NumberButton/NumberButton";

import "./Numbers.css";

function Numbers(): JSX.Element {
  return (
    <div className="Numbers">
      {/* Numbers */}
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
        // <button className={"Button"} key={value}>
        //   {value}
        // </button>
        <NumberButton key={value} value={value} />
      ))}
    </div>
  );
}

export default Numbers;
