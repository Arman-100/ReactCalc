import React from "react";
import "./Button.scss";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const isTopRow = (val) => {
  return val === "%" || val === "+/-" || val === "C";
};

const Button = (props) => (
  <div
    className={`button-wrapper ${
      isOperator(props.children)
        ? null
        : isTopRow(props.children)
        ? "topRow"
        : "operator"
    }`}
  >
    {props.children}
  </div>
);

export default Button;
