import React from "react";
import { string as propString } from "prop-types";
import "./Button.css";

export default function ActionButton({ text, actionStyle }) {
  return <button className={actionStyle}>{text}</button>;
}

ActionButton.propTypes = {
  text: propString(),
  actionStyle: propString()
};
