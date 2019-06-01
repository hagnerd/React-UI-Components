import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import "./App.css";

const initialState = {
  display: "0",
  calculation: []
};

class App extends React.Component {
  state = initialState;

  handleClick = ({ type, key }) => {
    if (type === "clear") {
      this.setState(initialState);
    }

    // Write over the initial 0
    if (
      this.state.calculation.length === 0 &&
      type === "number" &&
      key !== "0"
    ) {
      this.setState({
        display: key,
        calculation: [key]
      });
    }

    if (this.state.calculation.length === 1) {
      if (type === "operator") {
        this.setState(prevState => ({
          display: key,
          calculation: [...prevState.calculation, key]
        }));
      } else if (type === "number") {
        this.setState(prevState => ({
          display: `${prevState.display}${key}`,
          calculation: [`${prevState.calculation[0]}${key}`]
        }));
      }
    }

    if (this.state.calculation.length === 2 && type === "number") {
      this.setState(prevState => ({
        display: key,
        calculation: [...prevState.calculation, key]
      }));
    }

    if (this.state.calculation.length === 3) {
      if (type === "number") {
        this.setState(prevState => ({
          display: `${prevState.display}${key}`,
          calculation: [
            ...prevState.calculation.slice(0, 2),
            `${prevState.calculation[2]}${key}`
          ]
        }));
      } else if (type === "equals") {
        const [n1, operator, n2] = this.state.calculation;

        switch (operator) {
          case "+":
            this.setState({
              display: `${Number(n1) + Number(n2)}`,
              calculation: []
            });
            break;
          case "-":
            this.setState({
              display: `${Number(n1) - Number(n2)}`,
              calculation: []
            });
            break;
          case "x":
            this.setState({
              display: `${Number(n1) * Number(n2)}`,
              calculation: []
            });
            break;
          case "/":
            this.setState({
              display: `${Number(n1) / Number(n2)}`,
              calculation: []
            });
            break;
          default:
            return;
        }
      }
    }
  };

  render() {
    return (
      <div className="calculator-grid">
        <CalculatorDisplay
          text={this.state.display}
          className="calculator-display calculator-grid-item"
        />
        <ActionButton
          text="clear"
          actionStyle="btn col-span-3 weight-light"
          handleClick={this.handleClick}
          type="clear"
        />
        <ActionButton
          text="&divide;"
          handleClick={this.handleClick}
          keyAlt="/"
        />
        <NumberButton text="7" handleClick={this.handleClick} />
        <NumberButton text="8" handleClick={this.handleClick} />
        <NumberButton text="9" handleClick={this.handleClick} />
        <ActionButton
          text="&times;"
          handleClick={this.handleClick}
          keyAlt="x"
        />

        <NumberButton text="4" handleClick={this.handleClick} />
        <NumberButton text="5" handleClick={this.handleClick} />
        <NumberButton text="6" handleClick={this.handleClick} />
        <ActionButton
          text="&minus;"
          handleClick={this.handleClick}
          keyAlt="-"
        />
        <NumberButton text="1" handleClick={this.handleClick} />
        <NumberButton text="2" handleClick={this.handleClick} />
        <NumberButton text="3" handleClick={this.handleClick} />
        <ActionButton text="+" handleClick={this.handleClick} />

        <NumberButton
          text="0"
          handleClick={this.handleClick}
          buttonStyle="btn col-span-3"
        />
        <ActionButton text="=" handleClick={this.handleClick} type="equals" />
      </div>
    );
  }
}

export default App;
