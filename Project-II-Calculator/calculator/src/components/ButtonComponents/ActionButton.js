import React from "react";
import { string as propString, func } from "prop-types";
import "./Button.css";

export default function ActionButton({
  text,
  actionStyle = "btn text-l bg-carmine text-color-white weight-light",
  handleClick,
  type = "operator",
  keyAlt = text
}) {
  return (
    <button
      className={actionStyle}
      onClick={() => handleClick({ type, key: keyAlt })}
    >
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  text: propString.isRequired,
  handleClick: func.isRequired,
  type: propString,
  keyAlt: propString,
  actionStyle: propString
};
