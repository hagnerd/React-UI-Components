import React from "react";
import { string as propString } from "prop-types";
import "./Button.css";

export default function NumberButton({ text, buttonStyle = "btn" }) {
  return <button className={buttonStyle}>{text}</button>;
}

NumberButton.propTypes = {
  text: propString.isRequired,
  buttonStyle: propString
};
