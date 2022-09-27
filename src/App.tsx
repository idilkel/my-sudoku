import React from "react";
import "./App.css";
import Card from "./Components/CardArea/Card/Card";
import Grid from "./Components/CardArea/Grid/Grid";
import { Provider } from "react-redux";
import configureStore from "./core/configure-store";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1 data-cy="title">Sudoku</h1>
        <Card />
      </Provider>
    </div>
  );
}

export default App;
