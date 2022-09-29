import React from "react";
import "./App.css";
import Card from "./Components/CardArea/Card/Card";
import Grid from "./Components/CardArea/Grid/Grid";
import { Provider } from "react-redux";
import configureStore from "./core/configure-store";
import { register } from "./core/service-worker";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <h1 data-cy="title">Sudoku</h1>
          <Card />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

register();
