import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function NumberButton({ text, buttonStyle }) {
  return <button className={buttonStyle}>{text}</button>;
}

NumberButton.propTypes = {
  text: PropTypes.string(),
  buttonStyle: PropTypes.string()
};
