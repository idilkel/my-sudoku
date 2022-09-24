import "./Block.css";

interface BlockProps {
  rowIndex: number;
  colIndex: number;
}

function Block(props: BlockProps): JSX.Element {
  return (
    <div
      className="Block"
      data-cy={`block-${props.rowIndex}-${props.colIndex}`}
    >
      {props.rowIndex}
      {/* |{props.rowIndex} {props.colIndex}| */}
    </div>
  );
}

export default Block;
