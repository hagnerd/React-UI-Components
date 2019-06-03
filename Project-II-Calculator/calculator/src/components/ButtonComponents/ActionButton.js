import React from "react";
import { string as propString, func } from "prop-types";
import "./Button.css";

export default function ActionButton({
  text,
  actionStyle = "btn text-l bg-carmine text-color-white weight-light",
  handleClick,
  type = "PUSH_OPERATOR",
  keyAlt = text,
  name = text
}) {
  return (
    <button
      data-testid={name}
      className={actionStyle}
      onClick={() => handleClick({ type, payload: keyAlt })}
    >
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  text: propString.isRequired,
  handleClick: func.isRequired,
  type: propString,
  key: propString,
  name: propString,
  actionStyle: propString
};
