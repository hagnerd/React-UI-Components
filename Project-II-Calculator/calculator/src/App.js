import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import "./App.css";

const initialState = {
  display: "0",
  calculation: []
};

function handlePushNumber(state, newNumber) {
  /*
   * When pushing a number we have four states to worry about:
   */
  switch (state.calculation.length) {
    case 0:
      /* 1. This is a new calculation, so add the new number to the display,
      as long as it isn't the number 0. */
      return newNumber !== 0
        ? { display: newNumber, calculation: [newNumber] }
        : state;
    case 1:
      /* 2. There is already a number present in the display, so we are
       * continuing to add digits (i.e. the number 12 is the number 1,
       * followed by the number 2). */
      return {
        display: `${state.display}${newNumber}`,
        calculation: [`${state.calculation[0]}${newNumber}`]
      };
    case 2:
      /* 3. There is a number and an operator, so we are starting a new
       * number. */
      return {
        display: newNumber,
        calculation: [...state.calculation, newNumber]
      };
    case 3:
      /* 4. There is already a second number but we are adding digits to it. */
      return {
        display: `${state.display}${newNumber}`,
        calculation: [
          ...state.calculation.slice(0, 2),
          `${state.calculation[2]}${newNumber}`
        ]
      };
    default:
      return state;
  }
}

function handlePushOperator(state, operator) {
  /*
   * There is only 1 valid state to be adding an operator:
   * There is already a number present.
   * */
  return state.calculation.length === 1
    ? {
        display: operator,
        calculation: [...state.calculation, operator]
      }
    : state;
}

function handleCalculate(state) {
  /*
   * If someone attempts to calculate before there is two numbers,
   * and an operator, it should not work.
   */
  if (state.calculation.length !== 3) {
    return state;
  }

  // Get the two numbers and the operator from state
  const [n1, operator, n2] = state.calculation;

  /*
   * Set the new display based on the result of the calculation
   * */
  let display;
  switch (operator) {
    case "x":
      display = `${Number(n1) * Number(n2)}`;
      break;
    case "/":
      display = `${Number(n1) / Number(n2)}`;
      break;
    case "+":
      display = `${Number(n1) + Number(n2)}`;
      break;
    case "-":
      display = `${Number(n1) - Number(n2)}`;
      break;
    default:
      display = state.display;
  }

  // Reset the calculation to [], and return the new state;
  return {
    display,
    calculation: []
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "PUSH_NUMBER":
      return handlePushNumber(state, action.payload);
    case "PUSH_OPERATOR":
      return handlePushOperator(state, action.payload);
    case "CALCULATE":
      return handleCalculate(state);
    case "CLEAR_DISPLAY":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="calculator-grid">
      <CalculatorDisplay
        text={state.display}
        className="calculator-display calculator-grid-item"
      />
      <ActionButton
        text="clear"
        actionStyle="btn col-span-3 weight-light"
        handleClick={dispatch}
        type="CLEAR_DISPLAY"
      />
      <ActionButton
        text="&divide;"
        handleClick={dispatch}
        keyAlt="/"
        name="divide"
      />
      <NumberButton text="7" handleClick={dispatch} />
      <NumberButton text="8" handleClick={dispatch} />
      <NumberButton text="9" handleClick={dispatch} />
      <ActionButton
        text="&times;"
        handleClick={dispatch}
        keyAlt="x"
        name="multiply"
      />

      <NumberButton text="4" handleClick={dispatch} />
      <NumberButton text="5" handleClick={dispatch} />
      <NumberButton text="6" handleClick={dispatch} />
      <ActionButton
        text="&minus;"
        handleClick={dispatch}
        keyAlt="-"
        name="subtract"
      />
      <NumberButton text="1" handleClick={dispatch} />
      <NumberButton text="2" handleClick={dispatch} />
      <NumberButton text="3" handleClick={dispatch} />
      <ActionButton text="+" name="add" handleClick={dispatch} />

      <NumberButton
        text="0"
        handleClick={dispatch}
        buttonStyle="btn col-span-3"
      />
      <ActionButton text="=" handleClick={dispatch} type="CALCULATE" />
    </div>
  );
}

export default App;
