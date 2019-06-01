import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import "./App.css";

const App = () => {
  return (
    <div className="calculator-grid">
      <CalculatorDisplay
        text="0"
        className="calculator-display calculator-grid-item"
      />
      <ActionButton text="clear" actionStyle="btn col-span-3 weight-light" />
      <ActionButton
        text="&divide;"
        actionStyle="btn text-l bg-carmine text-color-white weight-light"
      />
      <NumberButton text="7" buttonStyle="btn" />
      <NumberButton text="8" buttonStyle="btn" />
      <NumberButton text="9" buttonStyle="btn" />
      <ActionButton
        text="&times;"
        actionStyle="btn text-l bg-carmine text-color-white weight-light"
      />

      <NumberButton text="4" buttonStyle="btn" />
      <NumberButton text="5" buttonStyle="btn" />
      <NumberButton text="6" buttonStyle="btn" />
      <ActionButton
        text="&minus;"
        actionStyle="btn text-l bg-carmine text-color-white weight-light"
      />
      <NumberButton text="1" buttonStyle="btn" />
      <NumberButton text="2" buttonStyle="btn" />
      <NumberButton text="3" buttonStyle="btn" />
      <ActionButton
        text="+"
        actionStyle="btn text-l bg-carmine text-color-white weight-light"
      />

      <NumberButton text="0" buttonStyle="btn col-span-3" />
      <ActionButton
        text="="
        actionStyle="btn text-l bg-carmine text-color-white weight-light"
      />
    </div>
  );
};

export default App;
