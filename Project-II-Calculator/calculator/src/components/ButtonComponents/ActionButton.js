import React from "react";
import { string as propString } from "prop-types";
import "./Button.css";

export default function ActionButton({
  text,
  actionStyle = "btn text-l bg-carmine text-color-white weight-light"
}) {
  return <button className={actionStyle}>{text}</button>;
}

ActionButton.propTypes = {
  text: propString.isRequired,
  actionStyle: propString
};
