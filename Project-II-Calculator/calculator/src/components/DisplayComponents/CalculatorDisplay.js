import React from "react";
import { string as propString } from "prop-types";
import "./Display.css";

export default function CalculatorDisplay({ text, className }) {
  return <h2 className={className}>{text}</h2>;
}

CalculatorDisplay.propTypes = {
  text: propString.isRequired,
  className: propString
};
