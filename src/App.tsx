import React from "react";
import "./App.css";
import Card from "./Components/CardArea/Card/Card";
import Grid from "./Components/CardArea/Grid/Grid";

function App() {
  return (
    <div className="App">
      <h1 data-cy="title">Sudoku</h1>
      <Card />
    </div>
  );
}

export default App;
