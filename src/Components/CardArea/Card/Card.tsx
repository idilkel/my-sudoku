import Grid from "../Grid/Grid";
import NewButton from "../NewButton/NewButton";
import Numbers from "../Numbers/Numbers";
import "./Card.css";

function Card(): JSX.Element {
  return (
    <div className="Card">
      <NewButton />
      <Grid />
      <Numbers />
    </div>
  );
}

export default Card;
