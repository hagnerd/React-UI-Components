import React from "react";
import { string as propString, func } from "prop-types";
import "./Button.css";

export default function NumberButton({
  text,
  buttonStyle = "btn",
  handleClick
}) {
  return (
    <button
      className={buttonStyle}
      onClick={() => handleClick({ type: "number", key: text })}
    >
      {text}
    </button>
  );
}

NumberButton.propTypes = {
  text: propString.isRequired,
  handleClick: func.isRequired,
  buttonStyle: propString
};
