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
      <ActionButton text="&divide;" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <ActionButton text="&times;" />

      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <ActionButton text="&minus;" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <ActionButton text="+" />

      <NumberButton text="0" buttonStyle="btn col-span-3" />
      <ActionButton text="=" />
    </div>
  );
};

export default App;
