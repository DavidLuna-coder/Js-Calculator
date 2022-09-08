import "./App.css";
import React from "react";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  addDisplayText,
  resetDisplayText,
  changeDisplay,
} from "./redux/displaySlice";
const numbers = [
  {
    id: "one",
    value: "1",
  },
  {
    id: "two",
    value: "2",
  },
  {
    id: "three",
    value: "3",
  },
  {
    id: "four",
    value: "4",
  },
  {
    id: "five",
    value: "5",
  },
  {
    id: "six",
    value: "6",
  },
  {
    id: "seven",
    value: "7",
  },
  {
    id: "eight",
    value: "8",
  },
  {
    id: "nine",
    value: "9",
  },
  {
    id: "zero",
    value: "0",
  },
];

const operations = [
  {
    id: "add",
    value: "+",
  },
  {
    id: "subtract",
    value: "-",
  },
  {
    id: "multiply",
    value: "*",
  },
  {
    id: "divide",
    value: "/",
  },
  {
    id: "equals",
    value: "=",
  },
];

//Configuration of the Store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

function Calculator() {
  const display = useSelector((state) => state.display.displayText);
  const dispatch = useDispatch();

  return (
    <div id="calculator-container">
      <div id="display">
        <div id="display-text">{display}</div>
      </div>
      <div id="buttons-container">
        <div id="numbers-container">
          {numbers.map((number) => {
            return <Numbers name={number.id} value={number.value} />;
          })}
          <button id="clear" className="buttons" onClick={() => {
        dispatch(resetDisplayText());
      }}>
            AC
          </button>
          <button id="decimal" className="buttons" onClick={() => {
            dispatch(addDisplayText('.'));
          }}>
            .
          </button>
        </div>
        <div id="operations-container">
          {operations.map((op) => {
            return <Operations name={op.id} value={op.value} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Numbers(props) {
  const dispatch = useDispatch();
  return (
    <button
      className="numerpad"
      onClick={() => {
        dispatch(addDisplayText(props.value));
      }}
      id={props.name}
    >
      {props.value}
    </button>
  );
}

function Operations(props) {
  const dispatch = useDispatch();
  return (
    <button
      className="operationPad"
      onClick={() => {
        dispatch(addDisplayText(props.value));
      }}
      id={props.name}
    >
      {props.value}
    </button>
  );
}
export default App;
