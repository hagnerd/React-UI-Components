import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="calculator-grid">
      <CalculatorDisplay
        text="0"
        className="calculator-display calculator-grid-item"
      />
    </div>
  );
};

export default App;
